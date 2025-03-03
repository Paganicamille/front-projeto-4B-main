
'use client'
import { useEffect, useState } from "react";
import styles from "./listarAgendamento.module.css";

export default function agendamento() {
    const [consultas, setConsultas] = useState([]);
    const [mostrarMedico, setMostrarMedico] = useState(false);
    const [mostrarPaciente, setMostrarPaciente] = useState(false);
    const [busca, setBusca] = useState('');

    const filtrarConsultas = (consulta) => {
        return (
            consulta.medico?.toLowerCase().includes(busca.toLowerCase()) || 
            consulta.paciente?.toLowerCase().includes(busca.toLowerCase())
        );
    };

    const getConsultas = async () => {
        try {
            const response = await fetch('https://api-clinica-2a.onrender.com/consultas');
            const data = await response.json();
            setConsultas(data);
        } catch (error) {
            console.error('Erro ao buscar consultas:', error);
        }
    }

    useEffect(() => {
        getConsultas();
    }, []);

    return (
        <main className={styles.main}>
            <h1>Consultas</h1>
            <div className={styles.medicos_conteinar}>
                <button 
                    className={styles.buttonMedic}
                    onClick={() => setMostrarMedico(!mostrarMedico)}
                >
                    Buscar por Médico
                </button>
                
                {mostrarMedico && (
                    <div className={styles.botao} onClick={() => setMostrarMedico(false)}>
                        <div className={styles.selecione} onClick={(e) => e.stopPropagation()}>
                            <h3>Selecione um Médico</h3>
                            <input
                                placeholder="Digite o nome do médico"
                                type="text"
                                onChange={(e) => setBusca(e.target.value)}
                                value={busca}
                            />
                            <ul>
                                {consultas.filter(consulta => consulta.medico?.toLowerCase().includes(busca.toLowerCase())).map((md, i) => (
                                    <li className={styles.li} key={i}>{md.medico}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
                <button 
                    className={styles.buttonMedic}
                    onClick={() => setMostrarPaciente(!mostrarPaciente)}
                >
                    Buscar por Paciente
                </button>
                
                {mostrarPaciente && (
                    <div className={styles.botao} onClick={() => setMostrarPaciente(false)}>
                        <div className={styles.selecione} onClick={(e) => e.stopPropagation()}>
                            <h3>Selecione um Paciente</h3>
                            <input
                                placeholder="Digite o nome do paciente"
                                type="text"
                                onChange={(e) => setBusca(e.target.value)}
                                value={busca}
                            />
                            <ul>
                                {consultas.filter(consulta => consulta.paciente?.toLowerCase().includes(busca.toLowerCase())).map((pd, i) => (
                                    <li className={styles.li} key={i}>{pd.paciente}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
                <div className={styles.tabela_Container}>
                    <table className={styles.tabela_medic}>
                        <thead className={styles.thead}>
                            <tr className={styles.tr}>
                                <th className={styles.th}>ID</th>
                                <th className={styles.th}>Médico</th>
                                <th className={styles.th}>Especialidade</th>
                                <th className={styles.th}>Paciente</th>
                                <th className={styles.th}>Tipo</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                            {consultas.filter(filtrarConsultas).map((consulta) => (
                                <tr className={styles.tro} key={consulta.id}>
                                    <td className={styles.td}>{consulta.id}</td>
                                    <td className={styles.td}>{consulta.medico}</td>
                                    <td className={styles.td}>{consulta.especialidade}</td>
                                    <td className={styles.td}>{consulta.paciente}</td>
                                    <td className={styles.td}>{consulta.tipo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

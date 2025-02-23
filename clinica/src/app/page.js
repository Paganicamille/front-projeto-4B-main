import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.containerPrincipal}>
      <h1>Clínica Barkauskas</h1>
      <p className={styles.text}>Na Clínica Barkauskas, cada paciente é tratado com o carinho e a atenção que merece. Nosso compromisso é promover a saúde e o bem-estar, proporcionando um atendimento acolhedor e humanizado, onde o amor pela medicina se reflete em cada detalhe.</p>

    </div>
  );
}



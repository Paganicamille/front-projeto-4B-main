import styles from "./Card.module.css";

export default function Card({id, modelo, ano, cor}) {

    return (
        <div className={styles.div}>
            <h2>{id} - {modelo} </h2>
            <p>{ano}</p>
            <p>{cor}</p>
        </div>
    )
}
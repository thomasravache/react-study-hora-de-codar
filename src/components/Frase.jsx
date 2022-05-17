import styles from './Frase.module.css';

function Frase() {
    return(
        <div className={styles.fraseContainer}>
            <h2>Minha frase</h2>
            <p className={styles.fraseContent}></p>
        </div>
    )
}

export default Frase;

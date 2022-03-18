import styles from "../styles/About.module.css"
function About(){
    return(
        <div className={styles.content}>
            <h1><span>Poke</span>Next</h1>
            <img src="images/charizard.png" alt="" />
            <p>Este site foi feito apenas para fins didaticos. Aplicando os conhecimentos de <span className={styles.react}>react</span> e <span className={styles.next}>next</span> adiquiridos no curso de next de Matheus Battisti</p>
        </div>
    )
}
export default About
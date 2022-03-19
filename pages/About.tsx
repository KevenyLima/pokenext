import Image from "next/image"
import styles from "../styles/About.module.css"
function About(){
    return(
        <div className={styles.content}>
            <h1><span>Poke</span>Next</h1>
            <Image src="/images/charizard.png" width="300px" height="300px" alt=" imagem de um charizard" />
            <p>Este site foi feito apenas para fins didáticos. Aplicando os conhecimentos de <span className={styles.react}>React</span> e <span className={styles.next}>Next</span> adquiridos no curso de Next de Matheus Battisti.</p>
        </div>
    )
}
export default About


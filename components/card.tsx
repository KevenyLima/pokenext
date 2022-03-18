import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Card.module.css"
import { IPokemon } from "./interfaces/IPokemon"

interface Props{
    pokemon:IPokemon
}
function Card({pokemon}:Props){
    return(
        <div className={styles.card}>
            <div className={styles.image}>
                <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} height='120px' width='120px' alt={pokemon.name}/>
            </div>
            <h4>{pokemon.name}</h4>
            <span>#{pokemon.id}</span>
            <div className={styles.button}><Link href={`/pokemon/${pokemon.id}`}><a>Detalhes</a></Link></div>
        </div>
    )
}
export default Card
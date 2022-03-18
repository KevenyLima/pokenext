import Image from "next/image"
import styles from "../styles/Card.module.css"
interface poke{
    name:string,
    url:string
    id:number
}
interface Props{
    pokemon:poke
}
function Card({pokemon}:Props){
    return(
        <div className={styles.card}>
            <div className={styles.image}>
                <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} height='120px' width='120px' alt={pokemon.name}/>
            </div>
            <h4>{pokemon.name}</h4>
            <div><button>Detalhes</button></div>
        </div>
    )
}
export default Card
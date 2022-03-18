import  { type ,IPokemonDetails} from "./interfaces/IPokemonDetails"
import styles from "../styles/CardDetails.module.css"
import Image from "next/image"
interface Props {
    pokemon: IPokemonDetails[]
}
function CardDetails({ pokemon }: Props) {
    function ConvertFeetToMeter(value:number){
        const feet =  0.3048
        const valueConverted = Math.round(value* feet)
        return valueConverted
    }  
    function ConvertInchToCentimeter(value:number){
        const inch = 2.54
        const valueConverted = Math.round(value*inch)
        return valueConverted
    }
    
    return (
        <div className={styles.details}>
            <h1>{pokemon[0].name}</h1>
            <div className={styles.image}><Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon[0].id}.png`} height='120px' width='120px' alt={pokemon[0].name}/></div>
            <h4>numero:</h4>
            <div className={styles.id}>#{pokemon[0].id}</div>
            <h4>Tipo:</h4>
            <ul>{pokemon[0].types.map((type) => (
                <li key={type.id} className={styles[`type_${type.name}`]}>{type.name}</li>
            ))}
            </ul>
                <div className={styles.attributes}>
                    <div><h4>Altura:</h4>{pokemon[0].height/10} metros</div>
                    <div><h4>Peso:</h4>{pokemon[0].weight/10}kg</div>
                </div>
        </div>
    )
}
export default CardDetails
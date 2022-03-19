import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext, NextPage } from "next"
import { useRouter } from "next/router"
import CardDetails from "../../components/CardDetails"
import { type, IPokemonDetails } from "../../components/interfaces/IPokemonDetails"
import styles from "../../styles/PageDetails.module.css"
import Image from "next/image"
export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const { params } = context
    const id = params!.id
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    //desestruturando a data para pegar apenas os dados necessarios
    const { name, types, weight, height } = data
    //construindo o types para interface IPokemonDetails
    const pokemonTypes: type[] = []
    types.map((type: any, index: number) => {
        pokemonTypes.push({ name: type.type.name, id: index + 1 })
    })
    //construindo o objeto Pokemon para passar como props
    const pokemon = []
    if (typeof id === 'string') {
        pokemon.push({ id: parseInt(id), name: name, types: pokemonTypes, weight: weight, height: height })
    }
    return {
        props: {
            pokemon: pokemon
        }
    }
}
export const getStaticPaths: GetStaticPaths = async () => {

    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    const data = await response.json()
    const paths = data.results.map((pokemon: any, index: number) => {
        return {
            params: { id: (index + 1).toString() }
        }
    })
    return { paths: paths, fallback: true }
}



interface Props {
    pokemon: IPokemonDetails[]
}
const Pokemon: NextPage<Props> = ({ pokemon }: Props) => {
    const router = useRouter()
    if(router.isFallback){
        return (
            <div className={styles.loading}>
                 <Image src="/images/Ball.svg" height="120px" width="120px" alt="loading"/>
            </div>
        )
    }
    return (
        <div className={styles.page_details}>
            <CardDetails pokemon={pokemon} />
        </div>
    )
}
export default Pokemon
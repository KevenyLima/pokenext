import type { NextPage } from 'next'
import Image from 'next/image'
import Card from '../components/card'
import { IPokemon } from '../components/interfaces/IPokemon'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  const data = await response.json()
  data.results.forEach((item: any, index: number) => {
    item.id = index + 1
  });

  return {
    props: { pokemons: data.results },
  }
}
interface Props{
  pokemons:IPokemon[]
}
const Home: NextPage<Props> = ({ pokemons }: Props) => {

  return (
    <div className={styles.home}>
      <h1><span>Poke</span>next</h1>
      <div className={styles.content}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>

  )
}

export default Home

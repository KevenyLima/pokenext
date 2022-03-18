export interface IPokemon{
    id:number,
    name:string,
    types:type[],
    height:number,
    weight:number
    url:string
}
interface type{
    id:number,
    name:string
}
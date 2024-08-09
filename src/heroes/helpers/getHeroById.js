import { heroes } from "../heroesData";

export const getHeroById = ( id ) =>{
    
 return heroes.find(hero => hero.id === id)

}
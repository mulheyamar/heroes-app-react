import { heroes } from "../heroesData";



export const getHeroesByPublisher = (publisher) => {

    // validar entrada de publisher
    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if (!validPublisher.includes(publisher)) {
        throw new Error(`${ publisher } is not a valid publisher`)
    }


    // en caso que sea un publisher válido devuelvo el filtro de heroes que coincidan con el argumento:
    return heroes.filter(hero => hero.publisher === publisher);
}
import { getPokemons, getPokemonColor } from '../../utils/fetchService';


const START_GET_POKEMONS = 'START_GET_POKEMONS';
const SUCCESS_GET_POKEMONS = 'SUCCESS_GET_POKEMONS';


const startGetPokemons = payload => ({
    type: START_GET_POKEMONS,
    ...payload
});

const successGetPokemons = payload => ({
    type: SUCCESS_GET_POKEMONS,
    ...payload
});

export const fetchPokemons = () => {
    return dispatch => {
        dispatch(startGetPokemons());
        let data = getPokemons(10,20);
        dispatch(successGetPokemons(data))
    }
}
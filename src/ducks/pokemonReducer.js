import axios from 'axios';

const initialState = {
    pokemon: {}
}


const GET_POKEMON = 'GET_POKEMON'
const GET_POKEMON_FULFILLED = 'GET_POKEMON_FULFILLED'
const GET_POKEMON_PENDING = 'GET_POKEMON_PENDING'
const GET_POKEMON_REJECTED = 'GET_POKEMON_REJECTED'

export function getPokemon(){
    const rand = Math.ceil(Math.random() * 151)
    const pokemon = axios.get(`https://pokeapi.co/api/v2/pokemon/${rand}`);

    return {
        type: GET_POKEMON,
        payload: pokemon
    }
}

export default function pokemonReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_POKEMON_PENDING: 
            return state;
        case GET_POKEMON_REJECTED: 
            return state;
        case GET_POKEMON_FULFILLED: 
            return {...state.pokemon, pokemon: payload}
        default: 
            return state;
    }
}

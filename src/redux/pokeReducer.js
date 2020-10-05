import axios from 'axios';

//Create initialState
const initialState = {
    pokemon: {}
}

//Variable that saves action types
const GET_POKEMON = 'GET_POKEMON';

//Action Creator/Action Builder
export function getPokemon(){
    const rand = Math.ceil(Math.random() * 151);
    const pokemon = axios.get(`https://pokeapi.co/api/v2/pokemon/${rand}`)

    return {
        //Actions always have a type and payload property
        type: GET_POKEMON,
        payload: pokemon
    }
}

//Reducer Function, control center for your reducer, is what actually state in redux
export default function pokeReducer(state = initialState, action){
    const {type, payload} = action;

    //Switch determines which action invoked, and then changes state
    switch(type){
        case GET_POKEMON + '_PENDING':
            return state;
        case GET_POKEMON + '_FULFILLED':
            return {...state, pokemon: payload};
        case GET_POKEMON + '_REJECTED':
            return state;
        default:
            return state;
    }
}
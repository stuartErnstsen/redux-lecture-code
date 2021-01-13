//Import createStore from redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
//Import reducer function from our reduced file(s)
import reducer from './reducer';
import pokemonReducer from './pokemonReducer';

const rootReducer = combineReducers({
    userReducer: reducer,
    pokemonReducer: pokemonReducer
})

//Export your redux store, passing in the reducer(s)
export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
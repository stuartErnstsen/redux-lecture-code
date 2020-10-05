//Create initialState
const initialState = {
    user: {
        username: 'Ash Ketchum',
        age: 12,
        email: 'gottacatchemall@gmail.com'
    }
}

//Variable that saves action types
const GET_USER = 'GET_USER';

//Action Creator/Action Builder
export function getUser(userObj){
    //Return action object
    return {
        //Actions always have a type and payload property
        type: GET_USER,
        payload: userObj
    }
}

//Reducer Function, control center for your reducer, is what actually state in redux
export default function reducer(state = initialState, action){
    const {type, payload} = action;

    //Switch determines which action invoked, and then changes state
    switch(type){
        case GET_USER:
            return {...state, user: payload};
        default:
            return state;
    }
}

// {
//  user: {username: '', age: '', email: ''}
// }
//Creating the default initial state for our reducer file
const initialState = {
    //State items you want to share with components
    user: {
    }
}

//Const action type variable names to avoid magical strings that throw silent errors on misspelling
const GET_USER = 'GET_USER'
//Action builders contain the information for the reducer function to change state
export function getUser(userObj){
    //return action object
    return {
        //Action always contains a type property and a payload property
        type: GET_USER,
        payload: userObj
    }
}

//Reducer function is the control center of the reducer file. It is what actually changes state, based on information received from action builders.
export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_USER: 
            //Copy content of state to new object and replace user with the new payload(userObj) to override that specific property on state
            return {...state, user: payload}
        default: 
            return state;
    }
}


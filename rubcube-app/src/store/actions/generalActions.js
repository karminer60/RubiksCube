import axios from 'axios'

//type property is a string that explains what interaction just happened
export const UPDATE_SIDES = 'UPDATE_SIDES'



//the payload property is data that goes along with that interaction
//actions are "dispatched" to our reducer- aka, passed into the reducer 
//fucntion as an argument
//When our reducer receives an action, it will update the state according 
//to the type and payload on the action

export const updateSides = (newColor) => dispatch => {
  dispatch({ 
    type: UPDATE_SIDES, 
    payload: newColor })
  
}






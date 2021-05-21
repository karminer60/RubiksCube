import axios from 'axios'

//type property is a string that explains what interaction just happened
export const GET_CITIES_START = 'GET_CITIES_START'
export const GET_CITIES_SUCCESS = 'GET_CITIES_SUCCESS'
export const GET_CITIES_FAILURE = 'GET_CITIES_FAILURE'


//the payload property is data that goes along with that interaction
//actions are "dispatched" to our reducer- aka, passed into the reducer 
//fucntion as an argument
//When our reducer receives an action, it will update the state according 
//to the type and payload on the action
export const getCities = () => dispatch => {
  dispatch({ type: GET_CITIES_START })
  axios
    .get('https://labs-28-citrics-b.herokuapp.com/cities/allid')
    .then(res => {
      console.log('get citites ->', res.data)
      dispatch({ type: GET_CITIES_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: GET_CITIES_FAILURE, payload: err.message })
    })
}






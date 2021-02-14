import {
    GET_CITIES_START,
    GET_CITIES_SUCCESS,
    GET_CITIES_FAILURE,
    
  } from '../actions/generalActions'
  
  
  const initialApplicationState = {
    isLoading: false,
    favoriteLoading: false,
  
    errorMessage: null,
    compareErrorMessage: null,
    cities: [],
  
    comparingCities: [],
  }
  
  export default function reducer(state = initialApplicationState, action) {
    switch (action.type) {
      case GET_CITIES_START:
        return { ...state, isLoading: true, errorMessage: null }
      case GET_CITIES_SUCCESS:
        return {
          ...state,
          cities: action.payload,
          isLoading: false,
          errorMessage: null,
        }
      case GET_CITIES_FAILURE:
        return { ...state, isLoading: false, errorMessage: action.payload }
      
      
  
      default:
        return state
    }
  }
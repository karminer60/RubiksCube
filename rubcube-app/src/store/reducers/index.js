//Initial data stored here

import {
    GET_SIDES_START,
    GET_SIDES_SUCCESS,
    GET_SIDES_FAILURE,
    
  } from '../actions/generalActions'
  
  
  const initialApplicationState = {
    isLoading: false,
    sides = 
    {sideOne: [[],[],[]],
      sideTwo: [[],[],[]],
      sideThree: [[],[],[]],
      sideFour: [[],[],[]],
      sideFive: [[],[],[]],
      sideSix : [[],[],[]],
    }
  }
  
  export default function reducer(state = initialApplicationState, action) {
    switch (action.type) {
      case GET_SIDES_START:
        return { ...state, isLoading: true, errorMessage: null }
      case GET_SIDES_SUCCESS:
        return {
          ...state,
          sides: action.payload,
          isLoading: false,
          errorMessage: null,
        }
      case GET_CITIES_FAILURE:
        return { ...state, isLoading: false, errorMessage: action.payload }
      
      
  
      default:
        return state
    }
  }
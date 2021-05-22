

import {
    UPDATE_SIDES,
    
  } from '../actions/generalActions'
  
  //Initial data stored here
  //data: each side is three arrays within an array
  const initialApplicationState = {
    isLoading: false,
    sides: 
    {
      sideOne: [[],[],[]],
      sideTwo: [[],[],[]],
      sideThree: [[],[],[]],
      sideFour: [[],[],[]],
      sideFive: [[],[],[]],
      sideSix : [[],[],[]],
    }
  }
  

  /*Build the logic to make moves and the actual move options
    How will I do this:
    1. Create buttons that allow the user to choose between:
        a. 18 possible moves possible moves
            i. Three dimensions * three rows * two ways to move = 18
                a. change color of all two dimensional squares for each move
                    1. create algorithm that changes multiple squares' colors according to move
                        a. store each side's current colors in state - do this by creating six arrays (six sides) with 9 squares (3 by 3)
*/
  export default function reducer(state = initialApplicationState, action) {
    switch (action.type) {
      case UPDATE_SIDES:
        return { 
          ...state,
          sides: action.payload
         }

      case UPDATE_SIDES:
        return { 
          ...state,
          sides: action.payload
        }

      case UPDATE_SIDES:
        return { 
          ...state,
          sides: action.payload
        }

          
      case UPDATE_SIDES:
        return { 
          ...state,
          sides: action.payload
        }


      case UPDATE_SIDES:
        return { 
          ...state,
          sides: action.payload
          }


      case UPDATE_SIDES:
        return { 
          ...state,
          sides: action.payload
        }


      case UPDATE_SIDES:
        return { 
          ...state,
          sides: action.payload
        }

          
      case UPDATE_SIDES:
        return { 
          ...state,
          sides: action.payload
        }



      case UPDATE_SIDES:
        return { 
          ...state,
          sides: action.payload
          }


      case UPDATE_SIDES:
        return { 
          ...state,
          sides: action.payload
        }


      case UPDATE_SIDES:
        return { 
          ...state,
          sides: action.payload
        }

          
      case UPDATE_SIDES:
        return { 
          ...state,
          sides: action.payload
        }


      case UPDATE_SIDES:
        return { 
          ...state,
          sides: action.payload
          }


      case UPDATE_SIDES:
        return { 
          ...state,
          sides: action.payload
        }


      case UPDATE_SIDES:
        return { 
          ...state,
          sides: action.payload
        }

          
      case UPDATE_SIDES:
        return { 
          ...state,
          sides: action.payload
        }

      case UPDATE_SIDES:
        return { 
          ...state,
          sides: action.payload
        }

          
      case UPDATE_SIDES:
        return { 
          ...state,
          sides: action.payload
        }
    

      default:
        return state
    }
  }
import React, {useState} from 'react';
import Cube from 'Cube.js';



const Home = () => {

  const [state, setState] = useState(null)
  return(
    <div>
      <RubiksCube> Solve the Rubik's Cube </RubiksCube>  
    </div>
)

}

//maptStateToProps gets state from the store
const mapStateToProps = state => {
    return{

    }
}

export default connect(mapStateToProps, ) (Home)
import React from 'react';
import Cube from 'Cube.js'


const Home = () => {

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
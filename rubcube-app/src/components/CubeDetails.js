import React, {useState} from 'react';
import { connect } from 'react-redux'



const CubeDetails = () => {
    const [state, setState] = useState(null)
   return (
       <div id = "cubeRepresentation">
         {/*I have to build a 3D object with three axis, each with three cube sides*/}
         {/* How can I build this: 
          1. Build x, y, z axes
          2. Add three squares to each axis */}     

        <h2> Cube Visualization </h2>

       </div>
   )

   
}

const mapStateToProps = state => {
    return{

    }
}

export default connect(mapStateToProps,)(CubeDetails)
import React, {useState} from 'react'
import CubeDetails from './CubeDetails.js'
import { connect } from 'react-redux'


const Cube = () => {
    const [state, setState] = useState(null)
    return(
        <div>
            <h2> Cube Visualization Goes Here </h2>
            
            <div id="cubeSide1" style={{ paddingLeft: "44.5%" }}>
                <CubeDetails/>   
            </div>
            <div id="cubeSide2" style={{ paddingLeft: "44.5%", transform: `skew(20deg, 20deg)`}}>
                <CubeDetails/> 
            </div>

            <div id="cubeSide3" style={{ paddingLeft: "44.5%", transform: `skew(20deg, 20deg)`}}>
                <CubeDetails/> 
            </div>
                
            
            <button id= 'initial-botton' >
                Button   
            </button>


        </div>
    )
}

const mapStateToProps = state => {
    return{

    }
}

export default connect(mapStateToProps,)(Cube)
import React, {useState} from 'react'
import CubeDetails from './CubeDetails.js'
import { connect } from 'react-redux'


const Cube = () => {
    const [state, setState] = useState(null)
    return(
        <div>
            <h2> Cube Visualization Goes Here </h2>
            
            <div id="cubeSide1" style={{ paddingLeft: "44.5%", position:'fixed', marginTop: '100px'}}>
                <CubeDetails/>   
            
                <div id="cubeSide2" style={{ paddingLeft: "44.5%", transform: `skew(-70deg, 0deg) scale(1, 0.25) translateX(-680px) translateY(-970px) `}}>
                    <CubeDetails/> 
                </div>

                <div id="cubeSide3" style={{ paddingLeft: "44.5%", transform: `skew(0deg, -20deg)  scale(0.75, 1) translateX(100px) translateY(-273px)`}}>
                    <CubeDetails/> 
                </div>
                
                <div id="cubeSide4" style={{transform: 'translate(500px, -450px)'}}>
                    <CubeDetails/> 
                </div>

                <div id="cubeSide5" style={{transform: 'translate(-400px, -600px)'}}>
                    <CubeDetails/> 
                </div>

                <div id="cubeSide6" style={{transform: 'translate(20px, -500px)'}}>
                    <CubeDetails/> 
                </div>
            
                <button id= 'initial-botton' >
                    Button   
                </button>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return{

    }
}

export default connect(mapStateToProps,)(Cube)
import React, {useState} from 'react'
import CubeDetails from './CubeDetails.js'
import { connect } from 'react-redux'
/*I have to build a 3D object with three axis
 How can I build this: 
    1. Build x, y, z axes
        a. create 2D representation
    2. Add three 2D squares to each axis
    
Build the logic to make moves and the actual move options
How will I do this:
    1. Create buttons that allow the user to choose between:
        a. 18 possible moves possible moves
            i. Three dimensions * three rows * two ways to move = 18
                a. change color of all two dimensional squares for each move
                    1. create algorithm that changes multiple squares' colors according move
                        a. store each side's current colors in state- do this by creating six arrays (six sides) with 9 squares (3 by 3)
                        
        */

const Cube = () => {
    const [state, setState] = useState(null)
    return(
        <div id="cubeVisualization" >
            
            <h2> Rubik's Cube </h2>
            
            <div id="cubeSide1AndVisualizationBox" style={{ paddingLeft: "44.5%", position:'fixed', marginTop: '100px'}}>
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
            
                <button id= 'test-button' >
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
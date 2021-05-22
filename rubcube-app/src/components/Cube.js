import React, {useState} from 'react'
import CubeDetails from './CubeDetails.js'
import { connect } from 'react-redux'
import {updateSides} from '../store/actions/generalActions'
/*
I have to build a 3D object with three axis
How can I build this: 
    1. Build x, y, z axes
        a. create 2D representation
    2. Add three 2D squares to each axis
*/

const Cube = () => {
    const [sideArray, setSideArray] = useState(null)

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


            </div>

            <div id="movesButtons">
                    <button id= 'LA-button' >
                        LA   
                    </button> 

                    <button id= 'LT-button' >
                        LT  
                    </button> 

                    <button id= 'RA-button' >
                        RA   
                    </button> 

                    <button id= 'RT-button' >
                        RT   
                    </button> 

                    <button id= 'UA-button' >
                        UA  
                    </button> 

                    <button id= 'UT-button' >
                        UT   
                    </button> 

                    <button id= 'DA-button' >
                        DA   
                    </button> 

                    <button id= 'DT-button' >
                        DT   
                    </button> 

                    <button id= 'FA-button' >
                        FA   
                    </button> 

                    <button id= 'FT-button' >
                        FT   
                    </button> 

                    <button id= 'BA-button' >
                        BA   
                    </button> 

                    <button id= 'BT-button' >
                        BT   
                    </button> 

                    <button id= 'MXA-button' >
                        MXA   
                    </button> 

                    <button id= 'MXT-button' >
                        MXT   
                    </button> 

                    <button id= 'MYA-button' >
                        MYA   
                    </button> 

                    <button id= 'MYT-button' >
                        MYT   
                    </button> 

                    <button id= 'MZA-button' >
                        MZA   
                    </button> 

                    <button id= 'MZT-button' >
                        MZT   
                    </button> 

                </div>

        </div>
    )
}

//To tell connect which pieces of our state we want to bring into this component
//It takes in sstate as a parameter, returns object where properties can be passed to props
//We have access to all our state via the state argument but the component onlt receives 
//the pieces of state that we turn out of mapStateToProps
const mapStateToProps = state => {
    return{

    }
}
//function currying and export the component
//when we use action creators in our connected components, we first import the action creator
//Then we pass the action creator into the connect function
export default connect(mapStateToProps, {updateSides : updateSides} )(Cube)
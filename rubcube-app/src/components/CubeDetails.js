import React, { useState } from 'react';
import { connect } from 'react-redux'



const CubeDetails = () => {
    const [state, setState] = useState(null)
    const z1 = '100px'
    const y1 = '50px'
    const z2 ='100px'
    const x2 = '0px'
    
    return (
              
        <div id='square'style={{ border: "solid", borderColor: "black", width: "9rem", height: "9rem", display: "flex", flexWrap: "wrap" }}>
            <div style={{ border: "solid", borderColor: "black", width: "2.62rem", height: "2.62rem" }}></div>
            <div style={{ border: "solid", borderColor: "black", width: "2.62rem", height: "2.62rem" }}></div>
            <div style={{ border: "solid", borderColor: "black", width: "2.62rem", height: "2.62rem" }}></div>
            <div style={{ border: "solid", borderColor: "black", width: "2.62rem", height: "2.62rem" }}></div>
            <div style={{ border: "solid", borderColor: "black", width: "2.62rem", height: "2.62rem" }}></div>
            <div style={{ border: "solid", borderColor: "black", width: "2.62rem", height: "2.62rem" }}></div>
            <div style={{ border: "solid", borderColor: "black", width: "2.62rem", height: "2.62rem" }}></div>
            <div style={{ border: "solid", borderColor: "black", width: "2.62rem", height: "2.62rem" }}></div>
            <div style={{ border: "solid", borderColor: "black", width: "2.62rem", height: "2.62rem" }}></div>

        </div>

            

       
    )


}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps)(CubeDetails)
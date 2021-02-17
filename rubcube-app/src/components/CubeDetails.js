import React, {useState} from 'react';
import { connect } from 'react-redux'



const CubeDetails = () => {
    const [state, setState] = useState(null)
    let i = 0
    //for(i=0; i < ; i++){
        
        //return(
            //JSX (looks like HTML) goes in here
        //    console.log("--")
           
        //);
    
    //}
   return (
       <div id = "cubeRepresentation">
         {/*I have to build a 2D object with three axis, each with three cube sides*/}
         {/* How can I build this: 
          1. Build x, y, z axes
            a. crate 2D representation
          2. Add three 2D squares to each axis*/}     
        <div id = "visualization">
            <h2> Cube Visualization Goes Here </h2>
            <div id="cube" style={{paddingLeft:"44.5%"}}>
                <div style={{border:"solid",borderColor:"black", width:"9rem", height:"9rem", display:"flex", flexWrap: "wrap"}}>
                    <div style={{border:"solid",borderColor:"black", width:"2.62rem", height:"2.62rem"}}></div>
                    <div style={{border:"solid",borderColor:"black", width:"2.62rem", height:"2.62rem"}}></div>
                    <div style={{border:"solid",borderColor:"black", width:"2.62rem", height:"2.62rem"}}></div>
                    <div style={{border:"solid",borderColor:"black", width:"2.62rem", height:"2.62rem"}}></div>
                    <div style={{border:"solid",borderColor:"black", width:"2.62rem", height:"2.62rem"}}></div>
                    <div style={{border:"solid",borderColor:"black", width:"2.62rem", height:"2.62rem"}}></div>
                    <div style={{border:"solid",borderColor:"black", width:"2.62rem", height:"2.62rem"}}></div>
                    <div style={{border:"solid",borderColor:"black", width:"2.62rem", height:"2.62rem"}}></div>
                    <div style={{border:"solid",borderColor:"black", width:"2.62rem", height:"2.62rem"}}></div>
                
                
               
                
                </div>
            </div>
            
            
            
            
            
        </div>

       </div>
   )

   
}

const mapStateToProps = state => {
    return{

    }
}

export default connect(mapStateToProps,)(CubeDetails)
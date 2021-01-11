import React, {useState} from 'react'


const Cube = () => {
    const [state, setState] = usetState(null)
    return(
        <div>
            {/*I have to build a 3D object with three axis, each with three cube sides*/}
            <button id= 'initial-botton' onClick= { () => toggle()}>
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
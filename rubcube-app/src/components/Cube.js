import React, {useState} from 'react'
import CubeDetails from './CubeDetails.js'
import { connect } from 'react-redux'


const Cube = () => {
    const [state, setState] = useState(null)
    return(
        <div>
            <div>
                <CubeDetails/> 
            </div>
            <button /*id= 'initial-botton' onClick= { () => toggle()}*/>
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
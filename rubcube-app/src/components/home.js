import React, {useState} from 'react';
import Cube from './Cube';
import { connect } from 'react-redux'


const Home = () => {

  const [state, setState] = useState(null)
  return(
    <div>
        <Cube> Solve the Rubik's Cube </Cube>  
    </div>
)

}

//maptStateToProps gets state from the store
const mapStateToProps = state => {
    return{

    }
}

export default connect(mapStateToProps, ) (Home)
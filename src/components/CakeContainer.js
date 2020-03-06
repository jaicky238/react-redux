import React from 'react'
import { connect } from 'react-redux'
import {buyCake} from '../redux/cake/cakeAction'

 function CakeContainer(props) {
    return (
        <div>
            <h1>
                No of  cakes - {props.numOfCakes}
            </h1>
            <button onClick={props.buyCake}>Buy cake </button>
        </div>
    )
}

const mapStateToprops = state =>{
    return{
        numOfCakes : state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake : () => dispatch(buyCake())
    }
}

export default connect(mapStateToprops,mapDispatchToProps)(CakeContainer)
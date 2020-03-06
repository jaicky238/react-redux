import React from 'react'
import { connect } from 'react-redux'
import {buyIcecream} from '../redux/iceCream/icecreamAction'

 function IceCreamContainer(props) {
    return (
        <div>
            <h1>
                No of  Icecream - {props.numOfIcecreams}
            </h1>
            <button onClick={props.buyIcecream}>Buy cake </button>
        </div>
    )
}

const mapStateToprops = state =>{
    return{
        numOfIcecreams : state.icecream.numOfIcecreams
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyIcecream : () => dispatch(buyIcecream())
    }
}

export default connect(mapStateToprops,mapDispatchToProps)(IceCreamContainer)
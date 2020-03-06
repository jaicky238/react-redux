import React ,{useState} from 'react'
import { connect } from 'react-redux'
import {buyCake} from '../redux/cake/cakeAction'

 function NewcakeContainer(props) {
     const [number,setNumber] = useState(1)
    return (
        <div>
            <h1>
                No of  cakes - {props.numOfCakes}
            </h1>
            <input type="text" value={number} onChange ={e=>setNumber(e.target.value)}/>
            <button onClick={()=>props.buyCake(number)}>Buy cake </button>
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
        buyCake : (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToprops,mapDispatchToProps)(NewcakeContainer)
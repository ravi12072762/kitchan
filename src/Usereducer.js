import React, { useReducer } from 'react'


function Usereducer() {
    const initialState = 0;
    const reducer = (state , action) =>{
        console.log(action.type);
        // return state ;
        if(action.type==="inc"){
            return state + 1
        }
        if(action.type==="dec"){
            return state - 1
        }
        if(action.type==="reset"){
            // return 0
            return state = 0
        }
    }

    const [state , dispatch] = useReducer(reducer, initialState)
  return (
    <>


    <div>
        <p>{state}</p>
        <button className='col-md-1'   onClick={()=> dispatch({type: "inc"})}>inc +</button>
        <button className='col-md-1' onClick={()=> dispatch({type: "dec"})}>dec -</button>
        <button className='col-md-1' onClick={()=> dispatch({type: "reset"})}>reset</button>

    </div>


    </>
  )
}

export default Usereducer
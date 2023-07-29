import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement_five, decrement_one, increment_five, increment_one } from './redux/slice/counterSlice';

const App = () => {

const count = useSelector((state)=>state.counter.value_one);
const dispatch = useDispatch();
function incrementone(){
  dispatch(increment_one());
}
function decrementone(){
  dispatch(decrement_one());
}


const count5 = useSelector((state)=>state.counter.value_five);
function incrementfive(){
  dispatch(increment_five());
}
function decrementfive(){
  dispatch(decrement_five());
}
  return (
    <div>
      <h1>Counter for 1 Using Redux</h1>
      <div className='box'>
        <button
        onClick={incrementone}
        >Inc(1)</button>
        <p>{count}</p>
        <button
         onClick={decrementone}
        >Dec(1)</button>
      </div>



      <h1>Counter for 5 Using Redux</h1>
      <div className='box'>
        <button
        onClick={incrementfive}
        >Inc(5)</button>
        <p>{count5}</p>
        <button
         onClick={decrementfive}
        >Dec(5)</button>
      </div>
    </div>
  )
}

export default App
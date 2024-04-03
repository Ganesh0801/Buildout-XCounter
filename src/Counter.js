import React,{useState} from 'react';
import style from "./Counter.module.css";


const Counter = () => {

    const [count,setCount]=useState(0)

  const Increment = ()=>{
    setCount((prev)=>prev+1)
  }

  const Decrement = ()=>{
    setCount((prev)=>prev - 1)
  }
  return (
    <>
     <h1>Counter App</h1>
     <p>Count: {count}</p>
     <button onClick={Increment}>Increment</button>
     <button onClick={Decrement}>Decrement</button>
    </>
  )
}

export default Counter
import React,{useState} from 'react';
import style from "./Counter.module.css";


const Counter = () => {

    const [count,setCount]=useState(0)
  return (
    <>
     <h1>Counter App</h1>
     <h3>Count:{count}</h3>
     <button onClick={()=>setCount(count+1)}>Increment</button>
     <button onClick={()=>setCount(count-1)}>Decrement</button>
    </>
  )
}

export default Counter
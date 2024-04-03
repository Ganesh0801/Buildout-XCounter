import React,{useState} from 'react';



const Counter = ({title}) => {

    const [count,setCount]=useState(0)

  const incrementButton = ()=>{
    setCount((prev)=>prev+1)
  }

  const decrementButton = ()=>{
    setCount((prev)=>prev - 1)
  }
  return (
    <>
     <h1>{title}</h1>
     <p>Count: {count}</p>
     <button onClick={incrementButton}>Increment</button>
     <button onClick={decrementButton}>Decrement</button>
    </>
  )
}

export default Counter
import React,{useEffect, useState} from 'react'

const UseEffect = ()=> {
    const[count,setCount] = useState(0)
    const[count2,setCount2] = useState(0)

useEffect(()=>{
    alert("HELLO KAISE HO AAP");
},[count])


const handleIncrement=()=>{
    setCount(count+1);
  }
  
  const Increment2=()=>{
    setCount2(count2+2);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <h1>Count: {count2}</h1>
      <button onClick={Increment2}>Increment Two</button>
    </div>
  )
}

export default UseEffect


// two alert are shown becaue of testing and strict checking
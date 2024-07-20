import react,{useEffect, useState} from 'react'



const UseState=()=>{

  
  // useEffect(()=>{
  //   alert("HELLO KAISE HO AAP");
  // },[count])
  
  const[count,setCount] = useState(0)
  console.log(count);

  useEffect(()=>{

    alert("Your Count Is Now: "+ count);

  },[count])
  // COUNT = 0  
  
  // const handleClick = ()=>{
    //     setCount(count+1);
    // }
    
    const handleIncrement=()=>{
      if (count<100) {
        
        setCount(count+1);
      }
    }
    
    const handleDecrement=()=>{
  if (count>0) {
    
  setCount(count-1);
  
  }
}


// Hooks allow function components to have access to state and other React features.

 

    return (
      
    <div>
       <div className="box">
        <div className="text">
      <h1>Count: <div className="box1">{count}</div> </h1><br />
<div className="gap">
<button onClick={handleIncrement}>Increment </button>
<button onClick={handleDecrement}>Decrement </button>
</div>


      {/* <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button> */}
    </div></div>
    
    </div>
     
  )
}

export default UseState




// syntax
// const[count,setCount]=userstate(0)
        //     |       |              |
        // Current    Update          value initilisation
        //   state     The Current
        //             state



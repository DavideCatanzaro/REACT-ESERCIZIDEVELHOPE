import React, { useState } from "react";

export function CounterFunc(){
   const [count, setCount] = useState(0)

   const handleCount = () =>{
    setCount(count + 1)
   }
   
    return(
        <>
        <h2>{count}</h2>
        <button onClick={handleCount}>
            increment
        </button>
        </>
    )
}
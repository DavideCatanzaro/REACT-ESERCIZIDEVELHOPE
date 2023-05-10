import React, { useEffect, useState } from "react";

export function CounterFunc2({onCounterChange}){
   const [count, setCount] = useState(0)

    useEffect(()=>{
        onCounterChange(count);
    },[count,onCounterChange])

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

// È l'unico modo che mi viene in mente di farlo ma nquando apro l'app mi dice che onCounterChange non è una funzione
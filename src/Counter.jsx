import useCounter from "./components/useEffectCounter";


function Counter(){
    const { count,increment,decrement,reset } = useCounter(0);
        
    

    return (
      <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      </>
    )
    }
  


export default Counter;
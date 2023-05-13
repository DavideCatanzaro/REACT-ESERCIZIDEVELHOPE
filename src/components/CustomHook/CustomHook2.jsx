import useCounter from "./CustomHook";

function CustomHook() {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default  CustomHook;
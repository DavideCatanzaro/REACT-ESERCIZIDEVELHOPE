import { useState, useEffect } from "react"


function Counter() {

    const [counter, setCount] = useState(0);

    
    useEffect(() => {
        console.log(`counter is mount`)
        return () => {
            console.log('counter is unmount')
        }
    }, [])


    
    useEffect(() => {
        console.log(`the counter is ${counter}`);
        return () => {
            console.log(`the counter was ${counter}`);
        }
    }, [counter])

    const increase = () => {
        setCount(count => count + 1)
    }

    const decrease = () => {
        if (counter > 0) {
            setCount(count => count - 1);
        }
      };

    



    return <>
            <h2>{counter}</h2>
            <button onClick={increase}>INCREASE</button>
            <button onClick={decrease}>DECREASE</button>
            </>
}

export default Counter
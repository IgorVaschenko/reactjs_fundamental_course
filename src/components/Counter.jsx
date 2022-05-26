import React, { useState } from "react";

const Counter = function () {
    const[count, setCounter] = useState(0)

    function increment() {
        setCounter(count+1);
        console.log(count)
      }

    function decrement() {
        setCounter(count - 1);
        console.log(count)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;
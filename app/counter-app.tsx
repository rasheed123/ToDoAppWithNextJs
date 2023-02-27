'use client'
import React, { useState } from 'react'

export default function CounterApp() {
    const [counter, setCounter]= useState(0);
    const decrement = () => {
        console.log("In Decrement");
        setCounter(counter - 1);
    };
    const increment = () => {
        console.log("In Increment");
        setCounter(counter +1 );
    };

  return <>
  <button onClick={decrement}>Decrement</button>
  {counter}
  <button onClick={increment}>Increment</button>
  </>

}

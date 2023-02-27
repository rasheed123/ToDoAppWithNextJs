'use client'
import React, { useState } from 'react'

export default function CounterAppAdvance() {
    const [counter, setCounter] = useState(0);
    const decrement = (kitna = 1) => {
        console.log("In Decrement");
        setCounter(counter - kitna);
    };
    const increment = (kitna = 1) => {
        console.log("In Increment");
        setCounter(counter + kitna);
    };

    return <>
        <button onClick={() => decrement(3)}>Decrement By 3 </button>
        <button onClick={() => decrement(2)}>Decrement By 2 </button>
        <button onClick={() => decrement()}>Decrement By 1</button>
        {counter}
        <button onClick={() => increment()}>Increment By 1</button>
        <button onClick={() => increment(2)}>Increment By 2</button>
        <button onClick={() => increment(3)}>Increment By 3</button>
    </>

}

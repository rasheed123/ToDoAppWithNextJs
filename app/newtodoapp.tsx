"use client";
import React, { useState } from 'react'
export default function NewTodoApp() {
    //const val = "hello";
    const[val,setVal] = useState("Mari value");
    const onChangeHandler = ( e: any)=> {
        //console.log("E is ", e.target.value);
        setVal(e.target.value);
    }
  return (
    <div>
        <h1>New TodoApps</h1>
        <input type={"text"} value={val} onChange={onChangeHandler} />
    </div>
  )
}

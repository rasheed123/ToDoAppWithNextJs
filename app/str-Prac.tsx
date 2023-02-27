'use client'
import { useState } from "react";

export default function StrPrac() {
  //const val = "Hello1425";
  const [val, setVal] = useState("Hello World")
  const [val2, setVal2] = useState("Hello World2")
  const onChangeHandler  = (e : any) =>{
    console.log("Is E" , e.target.value  );
    setVal(e.target.value);
  };
  const onChangeHandler2  = (e : any) =>{
    console.log("Is E" , e.target.value  );
    setVal2(e.target.value);
  };
  return (
    <>
    <input type={"text"} placeholder={val} onChange={onChangeHandler} />
    <br />
    <input type={"text"} placeholder={val2} onChange={onChangeHandler2} />
    <h2>Lenght of String 1 : {val.length} </h2>
    <h2>Lenght of String 2 : {val2.length}</h2>
    </>
  )
}

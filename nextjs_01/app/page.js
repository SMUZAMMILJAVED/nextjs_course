// "use client"
// import { useState } from "react";
import fs from "fs/promises"
export default function Home() {
  // const[count,setCount]=useState(0);
let a=fs.readFile('.gitignore');
a.then(data=>console.log(data.toString()))
  // console.log("hello!");
  return (
    <>
    
     {/* {count} */}
    <h1>Hello world!</h1>
    {/* <button className="bg-pink-600 rounded-lg hover:bg-blue-200 px-7 ml-2.5" onClick={()=>setCount(count +1)}>inc</button> */}
    </>
  );
}

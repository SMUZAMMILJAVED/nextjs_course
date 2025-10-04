// "use client"
// import { useState } from "react";
import Hero from "@/components/Hero";
import fs from "fs/promises"
import Image from "next/image";
export default function Home() {
  // const[count,setCount]=useState(0);
let a=fs.readFile('.gitignore');
a.then(data=>console.log(data.toString()))
  // console.log("hello!");
  return (
    <>
    <Hero/>
    {/* <img className="w-32 h-32" src="https://pid.gov.pk/pid_beta/admin/uploads/profile/1.jpg" alt="" /> */}
    <Image src={"https://pid.gov.pk/pid_beta/admin/uploads/profile/1.jpg"} width={320} height={320} alt="profile image"/>
     {/* {count} */}
    <h1>Hello world!</h1>
    <Image src={"/quaid.png"} width={200} height={200} alt="test"/> <br />
    <Image src="https://www.shutterstock.com/image-photo/mohammed-ali-jinnah-portrait-pakistan-260nw-1675828732.jpg" width={200} height={200} unoptimized alt="test"/>
   
    {/* <button className="bg-pink-600 rounded-lg hover:bg-blue-200 px-7 ml-2.5" onClick={()=>setCount(count +1)}>inc</button> */}
    </>
  );
}

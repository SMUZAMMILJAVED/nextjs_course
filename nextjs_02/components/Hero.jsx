'use client'
import React from 'react'
import { useState } from 'react'
const Hero = () => {
    const[count,setCount]=useState(0)
  return (
    <>
    <div>Hero {count}</div>
    <button onClick={()=>setCount(count +1)}>inc</button></>
  )
}

export default Hero
import React from 'react'
import Script from 'next/script'
const page = () => {
  return (
    <div>
        <Script>{`
        alert("hello!");
        `
}</Script>
        <h1>this is contact page!</h1>
    </div>
  )
}

export default page
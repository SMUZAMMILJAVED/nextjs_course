import Script from 'next/script'
import React from 'react'

const page = () => {
  return (
    <>
    <Script>
        {`
        alert("hello");
        `}
    </Script>
    
    <div>Contact page</div>
    </>
    
  )
}

export default page
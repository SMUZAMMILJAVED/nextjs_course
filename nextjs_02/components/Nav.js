import Link from 'next/link'
import React from 'react'

const Nav = () => {
    // console.log("hello");
  return (
    <div className='bg-blue-400 flex justify-center'>
        <ul className='flex space-x-4 text-4xl'>
            <Link href="/">
                <li>home</li>
            </Link>
           <Link href="/about">
            <li>about</li>
           </Link>
            <Link href="/contact">
            <li>Contact</li>
           </Link>
        </ul>
    </div>
  )
}

export default Nav
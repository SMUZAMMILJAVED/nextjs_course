import React from 'react';
import {actionSubmit} from '@/actions/from'
const page = () => {
   
  return (
    <div className="flex justify-center ">
        <form action={actionSubmit}>
          <label htmlFor="name">Username:</label>  <input type="text" name='name' id='name' className='border m-3.5 rounded-2xl' /> <br />
          <label htmlFor="password">Password:</label>  <input type="password" id='password' name="password" className='border rounded-2xl' />
          <div>
            <button className='border rounded-lg bg-black text-white p-2 mt-4'>submit</button>
          </div>
        </form>
    </div>
  )
}

export default page
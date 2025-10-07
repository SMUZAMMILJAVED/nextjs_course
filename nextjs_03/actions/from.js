'use server'
import fs from 'fs/promises';
 export const actionSubmit=async(e)=>{

console.log(e.get('name'),e.get("password"));

await fs.writeFile('data.txt',`name is ${e.get('name')} and tha password is ${e.get('password')}`)
    }
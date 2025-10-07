'use client'

export default function Home() {
  const handleClick=async()=>{
    let data={
      name:'muzammil',
      role:'admin'
    }
let a=await fetch('/api/add',{
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});
const resp=await a.json();
console.log(resp);

  }
  return (
    <div>
      <h1>next js</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

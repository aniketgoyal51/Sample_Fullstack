
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [state,setstate]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:7000/")
    .then((res)=>res.json())
    .then((res)=>setstate(res))    
  },[])
  return (
    <>
      <div>{state.Name}</div>
    </>
  )
}

export default App

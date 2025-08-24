import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,kuchBHI]= useState(15)
  // let counter = 5
  const addValue =()=>{
    
    // counter = counter+1;
    kuchBHI(counter+1)
    console.log("clicked",counter)
  }


  const removeValue = ()=>{
    kuchBHI(counter-1);
  }
  

  return (
    <>
      
    <h1>Counter </h1>
    <h2>counter value: {counter}</h2>
    <button
    onClick ={addValue}>Add value{counter}</button>
    <br/>
    <br>
    </br>


    
   <button onClick = {removeValue}>remove value{counter}</button>
    </>
  )
}

export default App

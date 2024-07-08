import { useState } from 'react'
import './App.css'

function App() {

const [counter, setCounter] = useState(0)

// let counter = 5


const addValue = ()=> {
  console.log(counter);
if (!(counter>19)){
  setCounter(counter+1)
}
// console.log(counter);
   
}

const decValue = ()=> {
  console.log(counter);
  if (!(counter<1)){
   setCounter(counter-1)
}
// console.log(counter);
}
  return (
   <>
   <h1>Chai aur react</h1>
   <h2>Counter value: {counter}</h2>
   <button
    onClick={addValue}
   >Increase value</button>
   <br />
   <button 
   onClick={decValue}
   >Decrease value</button>
   </>
  )
}

export default App

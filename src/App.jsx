import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("Kylo Ren")

  function handleClick(){
    setName("Darth Revan")
  }

  return (
    <>
    <button className="bg-slate-600 p-10 hover:bg-slate-700" onClick={handleClick}>Click Me!</button>
    {name}
    </>
  )
}

export default App

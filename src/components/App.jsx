import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from "./Home"
import Pairs from "./Pairs"
import { pair8Players } from '../helperFunctions.jsx'
import { pair9Players } from '../helperFunctions.jsx'
import { useNavigate } from "react-router-dom"

function App() {
  const [pairs, setPairs] = useState([])
  const [players, setPlayers] = useState(Array(8).fill(''))

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setPairs([])
    const foundPairs = pair8Players(players)

    console.log("foundPairs", foundPairs)
    foundPairs.forEach((round, index) => {
      
      round.forEach((pair, i) => {
        setPairs(prev => [...prev, <p className="text-sm font-bold">{pair[0]} / {pair[1]}</p>])
      })
    })

    navigate('/pairs');
  };

  return (
    <div className='h-full'>
      <Routes>
        <Route path='/' element={<Home setPairs={setPairs} handleSubmit={handleSubmit} players={players} setPlayers={setPlayers} />} />
        <Route path='/pairs' element={<Pairs pairs={pairs} handleSubmit={handleSubmit} />} />

        {/* <Route path='/error' element={<Error />} />
        <Route path='*' element={<Error />} /> */}
      </Routes>
    </div>
  )
}

export default App

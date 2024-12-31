import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from "./Home"
import Pairs from "./Pairs"
import { pair8Players } from '../helperFunctions.jsx'
import { pair9Players } from '../helperFunctions.jsx'
import { useNavigate } from "react-router-dom"

function App() {
  const [pairs, setPairs] = useState(() => {
    const storedPairs = sessionStorage.getItem('storedPairs')
    return storedPairs ? JSON.parse(storedPairs) : []
  })
  const [players, setPlayers] = useState(Array(8).fill(''))
  const [spinning, setSpinning] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setPairs([])
    const foundPairs = pair8Players([...players])

    setSpinning('spin')

    // foundPairs.forEach((round, index) => {
    //   round.forEach((pair, i) => {
    //     setPairs(prev => [...prev, <p className="text-sm font-bold">{pair[0]} / {pair[1]}</p>])
    //   })
    // })

    const newPairs = [];
    foundPairs.forEach((round) => {
      round.forEach((pair) => {
        newPairs.push({ player1: pair[0], player2: pair[1] });
      });
    });

    setPairs(newPairs);

    setTimeout(() => {
      setSpinning('')
      navigate('/pairs')
    }, 1000)
  }

  useEffect(() => {
    if (pairs.length > 0) {
      sessionStorage.setItem('storedPairs', JSON.stringify(pairs));
    }
  }, [pairs])

  return (
    <div className='h-full'>
      <Routes>
        <Route path='/' element={<Home setPairs={setPairs} handleSubmit={handleSubmit} players={players} setPlayers={setPlayers} spinning={spinning} />} />
        <Route path='/pairs' element={<Pairs pairs={pairs} handleSubmit={handleSubmit} />} />
        {/* <Route path='/error' element={<Error />} />
        <Route path='*' element={<Error />} /> */}
      </Routes>
    </div>
  )
}

export default App

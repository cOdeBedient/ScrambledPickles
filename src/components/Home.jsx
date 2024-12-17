import { useState } from 'react';
import { pairPlayers } from '../helperFunctions.jsx'
import { useNavigate } from "react-router-dom"


function Home({ setPairs }) {
  const [players, setPlayers] = useState(Array(8).fill(''))
  const [pairings, setPairings] = useState(null)

  const navigate = useNavigate()

  const handleChange = (index, value) => {
    setPlayers((prev) => {
      const newPlayers = [...prev];
      newPlayers[index] = value;
      return newPlayers
    })
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    const foundPairs = pairPlayers(players)
    foundPairs.forEach((round, index) => {
      round.forEach((pair, i) => {
        setPairs(prev => [...prev, <p>{pair[0]} and {pair[1]}</p>])
      })
    })

    navigate('/pairs');
  };

  return (
    <div>
     <h1>Scrambled Pickles</h1>
      <form onSubmit={handleSubmit} className="player-form">
        <h2>Enter Player Names</h2>
        {players.map((player, index) => (
          <div className="mb-2" key={index}>
            <label className="mr-2">Player {index + 1}</label>
            <input
              className="border-dashed border-2 border-black"
              type="text"
              value={player}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={`Enter Player ${index + 1} Name`}
              required
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home

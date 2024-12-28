import { useState } from 'react';
import { pair8Players } from '../helperFunctions.jsx'
import { pair9Players } from '../helperFunctions.jsx'
import { useNavigate } from "react-router-dom"


function Home({ setPairs }) {
  const [players, setPlayers] = useState(Array(9).fill(''))
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
    const foundPairs = pair9Players(players)

    console.log("foundPairs", foundPairs)

    foundPairs.forEach((round, index) => {
      round.forEach((pair, i) => {
        setPairs(prev => [...prev, <p>{pair[0]} and {pair[1]}</p>])
      })
    })

    navigate('/pairs');
  };

  return (
    <div className="bg-green-700 h-full">
     <h1 className="text-yellow-400 font-bold pt-6 text-3xl text-center">✣ Scrambled Pickles ✣</h1>
      <form onSubmit={handleSubmit} className="player-form flex flex-col items-center gap-2 mt-4 bg-green-600 mx-10 py-2 rounded-tr-3xl rounded-bl-3xl">
        <h2 className="text-lg italic text-black my-2">Enter player names:</h2>
        {players.map((player, index) => (
          <div className="mb-2" key={index}>
            <label className="rounded-tl-xl px-2 py-1 bg-green-400 border-solid border-r-0 border-2 border-black">Player {index + 1}</label>
            <input
              className="border-dashed border-2 border-black pl-2 bg-green-200"
              type="text"
              value={player}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={`Enter player ${index + 1} name`}
              required
            />
          </div>
        ))}
        <div className="w-full flex flex-row justify-end pr-7">
          <button className="text-black bg-yellow-400 border-solid border-2 border-black px-2 rounded-br-xl rounded-br-xl mb-3 mt-2" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Home

import { useState } from 'react';
import { pairPlayers } from '../helperFunctions.jsx'


function Home() {
  const [players, setPlayers] = useState(Array(8).fill(''));
  const [pairings, setPairings] = useState(null);
  const [text, setText] = useState([]);

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
    const pairs = pairPlayers(players)
    console.log('pairs', pairs)
    const rounds = pairs.forEach((round, index) => {
      round.forEach((pair, i) => {
        setText(prev => [...prev, <p>Round{index + 1}, Pair{i + 1}, {pair[0]} and {pair[1]}</p>])
      })
    })
    // })
    // setPairings(pairElements)
  };

  return (
    <div>
     <h1>Scrambled Pickles</h1>
      <form onSubmit={handleSubmit} className="player-form">
        <h2>Enter Player Names</h2>
        {players.map((player, index) => (
          <div key={index} className="player-input">
            <label>Player {index + 1}</label>
            <input
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
      {text}
    </div>
  );
}

export default Home

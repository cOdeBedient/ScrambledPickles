import { useState } from 'react';

function Home({ setPlayers, handleSubmit, players }) {
  const handleChange = (index, value) => {
    setPlayers((prev) => {
      const newPlayers = [...prev];
      newPlayers[index] = value;
      return newPlayers
    })
  };


  return (
    <div className="bg-green-700 h-full bg-[url('pickle-icon.png')] bg-repeat bg-[size:65px_65px] pt-6">
     <h1 className="text-black font-bold text-3xl text-center bg-yellow-400">✣ Scrambled Pickles ✣</h1>
      <form onSubmit={handleSubmit} className="bg-opacity-95 player-form h-[85%] flex flex-col items-center justify-between mt-5 bg-green-600 mx-10 py-2 rounded-tr-3xl rounded-bl-3xl border-solid border-2 border-black">
        <h2 className="text-lg italic text-black my-2">Enter player names:</h2>
        {players.map((player, index) => (
          <div className="mb-2" key={index}>
            <label className=" rounded-tl-xl px-2 py-1 bg-green-400 border-solid border-r-0 border-2 border-black">Player {index + 1}</label>
            <input
              className="h-8 border-dashed border-2 border-black pl-2 bg-green-200"
              type="text"
              value={player}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={`Enter player ${index + 1} name`}
              required
            />
          </div>
        ))}
        <div className="w-full flex flex-row justify-end pr-7">
          <button className="text-black px-2 w-[40%] rounded-br-xl mb-3" type="submit">
            <img src="/paddle-button.png" alt="Logo" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Home

import '../index.css'

function Home({ setPlayers, handleSubmit, players, spinning }) {
  const handleChange = (index, value) => {
    setPlayers((prev) => {
      const newPlayers = [...prev];
      newPlayers[index] = value;
      return newPlayers
    })
  }

  function pressClear() {
    setPlayers(Array(8).fill(''))
  }

  return (
    <div className="bg-green-700 h-full bg-[url('/pickle-icon.png')] bg-repeat bg-[size:65px_65px] pt-6">
     <h1 className="text-black font-bold text-3xl text-center bg-yellow-400">✣ Scrambled Pickles ✣</h1>
      <form onSubmit={handleSubmit} className="bg-opacity-95 player-form h-[85%] flex flex-col items-center justify-between mt-5 bg-green-600 mx-8 py-2 rounded-tr-3xl rounded-bl-3xl border-solid border-2 border-black drop-shadow-[0_5px_3px_rgba(0,0,0,0.35)]">
        <h2 className="text-lg italic text-black my-2">Enter player names:</h2>
        {players.map((player, index) => (
          <div className="mb-2 flex items-center w-full px-4" key={index}>  
              <label className="w-[80px] rounded-tl-xl px-2 py-1 bg-green-400 border-solid border-r-0 border-2 border-black">Player {index + 1}</label>
              <input
                className="flex-grow h-8 border-dotted border-2 border-black pl-2 bg-green-200"
                type="text"
                value={player}
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder={`Enter player ${index + 1} name`}
                required
              />
          </div>
        ))}
        <div className="w-full flex flex-row justify-between -mt-1 px-4">
          {/* <button className="text-black px-2 w-[35%] rounded-br-xl mb-3" type="submit"> */}
          <button type="button" onClick={pressClear} className={`pl-4 flex flex-row justify-end submit-btn mb-2`}>
            <p className="text-yellow-400 font-bold italic">clear</p>
          </button>
          <button className={`flex flex-row justify-end submit-btn mb-2 ${spinning}`} type="submit">
            <img src="/paddle-button.png" alt="submit" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Home

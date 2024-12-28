import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from "./Home"
import Pairs from "./Pairs"

function App() {
  const [pairs, setPairs] = useState([])

  return (
    <div className='h-full'>
      <Routes>
        <Route path='/' element={<Home setPairs={setPairs} />} />
        <Route path='/pairs' element={<Pairs pairs={pairs} />} />

        {/* <Route path='/error' element={<Error />} />
        <Route path='*' element={<Error />} /> */}
      </Routes>
    </div>
  )
}

export default App

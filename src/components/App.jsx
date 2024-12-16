import { Route, Routes } from 'react-router-dom'
import Home from "./Home"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/error' element={<Error />} />
      <Route path='*' element={<Error />} /> */}
    </Routes>
  )
}

export default App

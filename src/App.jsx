
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Recommendation from './pages/Recommendation'
import Widgets from './pages/Widgets'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path="/widgets" element={<Widgets />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

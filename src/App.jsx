import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import SinglePortfolio from './pages/SinglePortfolio'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/react-portfolio' element={<Home />} />
          <Route path='/portfolio/:slug' element={<SinglePortfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Footer from './components/footer/footer'
import './App.css'
import Navbar from './components/navbar/navbar'
import Interface from './pages/interface/interface'
import Characters from './pages/characters/characters'
import Home from './pages/home/home'
import Contents from './pages/content/contents'
import News from './pages/news/news'
import AnimePg from './pages/content/partials/animePg'
import GamePg from './pages/content/partials/gamePg'
import MangaPg from './pages/content/partials/mangaPg'
import MusicPg from './pages/content/partials/musicPg'


function App() {
  const location = useLocation();

  return (
    <>
      {/*Navbar />*/}
      {location.pathname !== '/home' && <Navbar />}
      {/*Content />*/}
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      <div className={"pt-20"}>
        <Routes>
          <Route path="/" element={<Interface />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/contents" element={<Contents />} />
          <Route path="/news" element={<News />} />
          <Route path="/anime" element={<AnimePg />} />
          <Route path="/game" element={<GamePg />} />
          <Route path="/manga" element={<MangaPg />} />
          <Route path="/music" element={<MusicPg />} />
        </Routes>
      </div>

      {/*Footer />*/}
      {<Footer/>}
    </>
  )
}

export default App

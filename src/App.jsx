import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import './App.css'
import Navbar from './components/Navbar'
import Interface from './Pages/Interface'
import Characters from './Pages/Characters'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    {/*Navbar />*/}
      <Navbar />

   {/*Content />*/}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Interface />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </div>

   {/*Footer />*/}
       <Footer /> 
  </>
  )
}

export default App

import React from 'react'
import { Link } from 'react-router-dom'

const Interface = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat font-family"
      style={{
        backgroundImage: "url('https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/259a0488a1154328b6c90eb238ad65e0/kv_pc.jpg')",
        height: '700px',
      }}
    >
      <div className="absolute inset-0 bg-black/30">
        <div className="flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="text-white text-5xl font-semibold mb-4 animate__animated animate__fadeInUp">
            UMAMUSUME PROJECT
          </h1>

          <Link
            to="/characters"
            className="border border-white text-white text-lg px-6 py-3 hover:bg-white hover:text-black transition-colors animate__animated animate__fadeInUp animate__delay-1s"
          >
            COME ON! Let's Go!
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Interface
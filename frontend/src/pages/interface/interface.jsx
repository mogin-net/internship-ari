import React from 'react'
import { Link } from 'react-router-dom'

const Interface = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
    >
      <div className="bgV">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="https://fastcdn.hoyoverse.com/mi18n/bh3_global/m20230317hy14h0glc0/upload/b5bc75b1ce923c4ae5a093950d6bb216_3460498006874666439.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-black/30">
        <div className="flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="text-white text-5xl font-semibold mb-4 animate__animated animate__fadeInUp">
            HONKAI PROJECT
          </h1>

          <Link
            to="/home"
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
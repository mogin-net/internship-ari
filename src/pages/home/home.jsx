import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'   

const Home = () => {
  return (
    <>
    {/* // Sidebar */}

      
      <div className="flex h-screen bgV">
              <Sidebar />
        <video autoPlay muted loop className="w-auto h-auto object-cover">
          <source src="https://fastcdn.hoyoverse.com/mi18n/bh3_global/m20230317hy14h0glc0/upload/b5bc75b1ce923c4ae5a093950d6bb216_3460498006874666439.mp4" type="video/mp4" />
        </video>
      </div>  
    </>
  )
}

export default Home
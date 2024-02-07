import React from 'react'
import Navbar from './Navbar'
import Main_Home from './Main_Home';

function Home() {
  return (
    <div className='grid grid-rows-2'>
      <Navbar />
      <Main_Home />
    </div>
  )
}

export default Home;
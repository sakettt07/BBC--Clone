import React, { useState } from 'react'
import Navbar from './Navbar'
import Main_Home from './Main_Home';

function Home() {
  const [menu,setMenu]=useState("");
  const [search,setSearch]=useState("");
  return (
    <div className='grid grid-rows-2'>
      <Navbar setMenu={setMenu} setSearch={setSearch} />
      <Main_Home menu={menu} search={search} />
    </div>
  )
}

export default Home;
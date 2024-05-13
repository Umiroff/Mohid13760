import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import '../home/Home.css'
import Hero from '../../components/hero/Hero'
import Products from '../../components/products/Products'

function Home() {
  return (
    <>
    <div className='home'>
      <div className='home_top'>
        <Navbar/>
        <Hero/>
      </div>
      <Products/>
    </div>
    </>
  )
}

export default Home
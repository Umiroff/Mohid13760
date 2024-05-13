import React from 'react'
import '../hero/Hero.css'
import HeroImg from '../../assets/hero-img.svg'
import { FaSearch  } from "react-icons/fa";

function Hero() {
  return (
    <>
    <div className='hero'>
        <div className='hero_text'>
            <h2>Discover <br /> Most Suitable Watches</h2>
            <p>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
            <form action="">
                <FaSearch style={{width: 25, height: 25, color: 'rgba(56, 88, 214, 1)'}}/>
                <input type="text" placeholder='Find the best brands'/>
                <button>Search</button>
            </form>
        </div>
        <img src={HeroImg} alt="" />
    </div>
    </>
  )
}

export default Hero
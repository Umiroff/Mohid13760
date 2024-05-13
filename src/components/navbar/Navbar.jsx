import React from 'react'
import '../navbar/Navbar.css'
import Logo from '../../assets/Logo.svg'
import { FaSearch, FaShoppingCart  } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";



function Navbar() {
  return (
    <>
        <div className='nav'>
            <img src={Logo} alt="" />
            <div className='nav_bar'>
                <p>Home</p>
                <select name="" id="">
                    <option value="Brands">Brands</option>
                </select>
                <p style={{width: 130}}>Recent Products</p>
                <p>Contact</p>
                <p>About</p>
            </div>
            <div className='nav_icons'>
                <FaSearch style={{color: 'whitesmoke', width: 20, height: 20, cursor: 'pointer'}}/>
                <BsFillPersonFill style={{color: 'whitesmoke', width: 20, height: 20, cursor: 'pointer'}}/>
                <FaShoppingCart style={{color: 'whitesmoke', width: 20, height: 20, cursor: 'pointer'}}/>
            </div>
        </div>
    </>
  )
}

export default Navbar
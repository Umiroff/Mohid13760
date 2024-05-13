import React, { useEffect, useState } from 'react'
import '../navbar/Navbar.css'
import Logo from '../../assets/Logo.svg'
import { FaSearch, FaShoppingCart  } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import axios from 'axios';




function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('');

    const toggleCollapse = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/search?q=${value}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [])
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
                <FaSearch onClick={toggleCollapse} style={{color: 'whitesmoke', width: 20, height: 20, cursor: 'pointer'}}/>
                <BsFillPersonFill style={{color: 'whitesmoke', width: 20, height: 20, cursor: 'pointer'}}/>
                <FaShoppingCart style={{color: 'whitesmoke', width: 20, height: 20, cursor: 'pointer'}}/>
            </div>
            {isOpen && (
                <div className='collapse'>
                    <form action="">
                        <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder='search...'/>
                    </form>
                    <button onClick={toggleCollapse}>cancel</button>
                </div>
            )}
        </div>
    </>
  )
}

export default Navbar
import React, { useEffect, useState } from 'react'
import '../navbar/Navbar.css'
import Logo from '../../assets/Logo.svg'
import { FaSearch, FaShoppingCart  } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import axios from 'axios';




function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('');
    const [data, setData] = useState(null);

    const toggleCollapse = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
        if(!value.trim()) return
        axios
            .get(`https://dummyjson.com/products/search?q=${value}`)
            .then(res => setData(res.data.products))
            .catch(err => console.log(err))
    }, [value])

    let searchItems = data?.map(el => (
        <div key={el.id} style={{display: 'flex'}}>
            <img src={el.thumbnail} alt="" />
            <h3>{el.title}</h3>
        </div>
    ))

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
                    <div>
                        <form action="">
                            <input style={{width: 500}} type="text" value={value} onChange={e => setValue(e.target.value)} placeholder='search...'/>
                        </form>
                        <div>
                            {searchItems}
                        </div>
                        <button style={{width: 100, height: 40}} onClick={toggleCollapse}>cancel</button>
                    </div>
                </div>
            )}
        </div>
    </>
  )
}

export default Navbar
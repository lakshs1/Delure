import React from 'react'
import {useState} from 'react'
import logo from '../assets/logo.jpg'
import '../css/navbar.css'
import {Link, NavLink } from 'react-router-dom'
import sicon from '../assets/search-icon.jpg'
import profile from '../assets/profile-icon.jpg'
import cart from '../assets/cart.jpg'
import menu from '../assets/menu.png'
const Navbar = () => {

  const [visible,setVisible] = useState(false);


  return (
    <div className='nav'>
      <img src={logo} className='logo' alt="DoriX" />
      <ul className='list'>
          <NavLink to='/'className='navl'>
            <p>HOME</p>
            <hr className='hr' /> 
          </NavLink>
          <NavLink to='/collection'className='navl'>
            <p>COLLECTION</p>
            <hr className='hr' /> 
          </NavLink>
          <NavLink to='/about'className='navl'>
            <p>ABOUT</p>
            <hr className='hr' /> 
          </NavLink>
          <NavLink to='/contact'className='navl'>
            <p>CONTACT</p>
            <hr className='hr' /> 
          </NavLink>
      </ul>
      <div className="rs">
        <img src={sicon} className='scon' alt="" />

        <div className="prof">
          <img src={profile} className='scon' alt="" />
          <div className="rollover">
            <div className="r2">
              <p className="rolling">my profile</p>
              <p className="rolling">orders</p>
              <p className="rolling">logout</p>
            </div>
          </div>
        </div>
        <Link to='./cart' className='c'>
          <img src={cart} className='scon' alt="" />
          <p className="n">10</p>
        </Link>
        <img onClick={()=>setVisible(true)}src={menu} className='menu' alt="" />
      </div>
          
      {/*sidebar menu for small screen*/}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`} >
        <div className='flex flex-col tect-gray-600'>
           <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3'>
            <img className='h-4 'src={menu} alt="" />
              <p>Back</p>
           </div>
           <NavLink onClick={()=>setVisible(false)}className='py-2 pl-6 border'to='/'>HOME</NavLink>
           <NavLink onClick={()=>setVisible(false)}className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
           <NavLink onClick={()=>setVisible(false)}className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
           <NavLink onClick={()=>setVisible(false)}className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>

        </div>
      </div>
    </div>
  )
}

export default Navbar

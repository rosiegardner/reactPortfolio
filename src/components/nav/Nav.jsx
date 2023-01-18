import React, {useState} from 'react'
import './nav.css'
import {BiHomeAlt, BiUser, BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {GiEvilBook} from 'react-icons/gi'
// import {RiServiceFill} from 'react-icons/ri'
// import {AiOutlineMessage} from 'react-icons/ai'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" 
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}>
          <BiHomeAlt /> Home
      </a>
      <a href="#about" 
        onClick={() => setActiveNav('#about')} 
        className={activeNav === '#about' ? 'active' : ''}> 
          <BiUser /> About
      </a>
      <a href="#experience"
        onClick={() => setActiveNav('#experience')} 
        className={activeNav === '#experience' ? 'active' : ''}>
          <BiBook /> Experience
      </a>
      <a href="#portfolio"
        onClick={() => setActiveNav('#portfolio')} 
        className={activeNav === '#portfolio' ? 'active' : ''}>
          <GiEvilBook /> Portfolio
      </a>
      <a href="#contact"
        onClick={() => setActiveNav('#contact')} 
        className={activeNav === '#contact' ? 'active' : ''}>
          <BiMessageSquareDetail /> Contact
      </a>
      
    </nav>
  )
}

export default Nav
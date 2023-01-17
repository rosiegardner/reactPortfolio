import React from 'react'
import './nav.css'
import {BiHomeAlt, BiUser, BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {GiEvilBook} from 'react-icons/gi'
// import {RiServiceFill} from 'react-icons/ri'
// import {AiOutlineMessage} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
      <a href="#"><BiHomeAlt /> Home</a>
      <a href="#about"><BiUser /> About</a>
      <a href="#experiences"><BiBook /> Experience</a>
      <a href="#portfolio"><GiEvilBook /> Portfolio</a>
      <a href="#contact"><BiMessageSquareDetail /> Contact</a>
      
    </nav>
  )
}

export default Nav
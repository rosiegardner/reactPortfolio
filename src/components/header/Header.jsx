import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/rosie.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi, I'm</h5>
        <h1>Rosie Gardner!</h1>
        <h5 className="text-light">
          Fullstack Developer
        </h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="" />
        </div>

        <a href='#contact' className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
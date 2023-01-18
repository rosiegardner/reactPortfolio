import React from 'react'
import './about.css'
import ME from '../../assets/rosie.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {FiUsers} from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div clasName='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="Rosie Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1.5 years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>0</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small> 20+ completed</small>
            </article>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, pariatur ea reiciendis quia at eligendi deleniti quibusdam recusandae. Molestiae temporibus illum non reiciendis consectetur! Temporibus non aperiam illo ullam facere.
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Chat!</a>
          </div>
        </div>
      </div>
    
    </section>
  )
}

export default About
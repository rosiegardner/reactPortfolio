import React from 'react'
import './experience.css'
import {BsHandThumbsUp} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsHandThumbsUp className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsHandThumbsUp className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsHandThumbsUp className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
              </div>           
            </article>
            <article className='experience__details'>
              <BsHandThumbsUp className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsHandThumbsUp className='experience__details-icon'/>
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsHandThumbsUp className='experience__details-icon'/>
              <div>
                <h4>Ruby on Rails</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsHandThumbsUp className='experience__details-icon'/>
              <div>
                <h4>PostgreSQL</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsHandThumbsUp className='experience__details-icon'/>
              <div>
                <h4>Firebase</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
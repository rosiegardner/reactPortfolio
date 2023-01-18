import React from 'react'
import './portfolio.css'
// import IMG1 '../../assets/portfolio1.jpg

//DO NOT USE THE IMAGES IN PRODUCTION

// ARRAY FOR DATA -- map through id's

// const data = [
//   {
//     id: 1,   // unique Key
//     image: IMG1,  // image id
//     title: 'LOREM SLOPLPP',
//     github: 'https://github.com/',
//     demo: ' <insert demo link after deployment>'
//   },
//   {
//     id: 2,
//     image: IMG2,
//     title: 'LOREM SLOPLPP',
//     github: 'https://github.com/',
//     demo: ' <insert demo link after deployment>'
//   },
//   {
//     id: 3,
//     image: IMG3,
//     title: 'LOREM SLOPLPP',
//     github: 'https://github.com/',
//     demo: ' <insert demo link after deployment>'
//   },
//   {
//     id: 4,
//     image: IMG4,
//     title: 'LOREM SLOPLPP',
//     github: 'https://github.com/',
//     demo: ' <insert demo link after deployment>'
//   }
// ]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {/* MAPPING THROUGH THE DATA ARRAY */}
        {/* destructor the id, image, title, github, demo - return the article tag of unique key = id */}
        {/* {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt="{title}" />
                </div>
                <h3> {title} </h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                </div>
              </article>
            )
          })
        } */}

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            {/* <img src={IMG} alt="" /> */}
          </div>
          <h3> UNDER CONSTRUCTION </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/rosiegardner" className='btn' target='_blank'>Github</a>
            {/* <a href="https://github.com/rosiegardner" className='btn btn-primary' target='_blank'>Demo</a> */}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
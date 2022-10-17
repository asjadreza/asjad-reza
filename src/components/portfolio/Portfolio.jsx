import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/simon.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Simon Game',
    github: 'https://github.com/asjadreza/Simon_game',
    demo: 'https://asjadreza.github.io/Simon_game/'
  },

  {
    id: 1,
    image: IMG2,
    title: 'Todo Web-app',
    github: 'https://github.com',
    demo: 'https://shrouded-plateau-40189.herokuapp.com/'
  },

  {
    id: 1,
    image: IMG3,
    title: 'Todo Web-app',
    github: 'https://github.com',
    demo: 'https://shrouded-plateau-40189.herokuapp.com/'
  },

  {
    id: 1,
    image: IMG4,
    title: 'Todo Web-app',
    github: 'https://github.com',
    demo: 'https://shrouded-plateau-40189.herokuapp.com/'
  },

  {
    id: 1,
    image: IMG5,
    title: 'Todo Web-app',
    github: 'https://github.com',
    demo: 'https://shrouded-plateau-40189.herokuapp.com/'
  },

  {
    id: 1,
    image: IMG6,
    title: 'Todo Web-app',
    github: 'https://github.com',
    demo: 'https://shrouded-plateau-40189.herokuapp.com/'
  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
            <a href={github} className='btn'>Github</a>
            <a href= {demo} className='btn btn-primary' target='blank'>Live Demo</a>
          </div>          
        </article>  
            )
          })
        }          
      </div>
    </section>
  )
}

export default Portfolio
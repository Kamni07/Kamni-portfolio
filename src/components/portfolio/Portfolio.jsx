import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'


const data =[
  {
    id: 1,
    image: IMG1,
    title: 'Amazon Clone',
    github: 'https://github.com/Kamni07/Amazone_clone',
    demo: 'https://amazone-clone-lilac.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Education Website',
    github: 'https://github.com/Kamni07/Education_website',
    demo: 'https://education-website-omega.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Guarder',
    github: 'https://github.com/Kamni07/guarder-template',
    demo: 'https://guarder-template.vercel.app/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({id, image, title,github, demo}) => {
            return(
              <article key={id} className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
         <div className="portfolio_item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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
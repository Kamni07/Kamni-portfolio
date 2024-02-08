import React from 'react'
import './about.css'
import ME from '../../assets/avatar1.png'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {FaRegFolderOpen} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <BsAward className='about_icon'/>
              <h5>Fresher</h5>
              <small></small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Passionate</h5>
              <small></small>
            </article>

            <article className='about_card'>
              <FaRegFolderOpen className='about_icon'/>
              <h5>Coder</h5>
              <small></small>
            </article>
          </div>

          <p>
            As a full stack developer, I possess an impressive set of skills and knowledge that allow me to navigate through 
            both the front-end and back-end aspects of software development.My expertise spans across various technologies, 
            frameworks, and programming languages, enabling me to create robust and dynamic applications.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
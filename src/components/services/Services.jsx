import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Passionate about creating intuitive and user-centered designs.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Enthusiastic about gaining hands-on experience and eager to embark on new design challenges!</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Knowledgeable about UX/UI principles, including wireframing, prototyping, and user research.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p> Ability to effectively communicate design concepts and ideas.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Familiarity with designing for various platforms, including web and mobile.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Collaborative nature, eager to learn and work alongside cross-functional teams.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Proficient in languages such as HTML, CSS, and JavaScript.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Understanding of web development principles and best practices.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Familiarity with front-end frameworks like Bootstrap or React.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Knowledge of version control systems such as Git.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Solid problem-solving skills to troubleshoot and debug code.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Eagerness to learn new technologies and stay updated on industry trends.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Familiarity with responsive web design techniques.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className='service'>
          <div className='service_head'>
            <h3>Python</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Proficient in Python programming language.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Solid understanding of fundamental programming concepts: data types, control flow, and functions.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Familiarity with Python libraries and frameworks such as NumPy, Pandas, and Flask.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Knowledge of object-oriented programming (OOP) principles.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Understanding of web scraping techniques using Python.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Strong problem-solving skills to tackle programming challenges.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services
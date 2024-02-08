import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Show',
    review: 'simply the best absolutely fantastic show from start to finish a fantastic end to a great day in london with my friend thank you. GO AND SEE IT! Spend some extra money on a good seating, as ours wasnt the best to enjoy the show. A life of a great performer as Tina isnt easy to show, but they did a great job.'
  },
  {
    avatar: AVTR2,
    name: 'Kapil Show',
    review: 'simply the best absolutely fantastic show from start to finish a fantastic end to a great day in london with my friend thank you. GO AND SEE IT! Spend some extra money on a good seating, as ours wasnt the best to enjoy the show. A life of a great performer as Tina isnt easy to show, but they did a great job.'
  },
  {
    avatar: AVTR3,
    name: 'Thakur Show',
    review: 'simply the best absolutely fantastic show from start to finish a fantastic end to a great day in london with my friend thank you. GO AND SEE IT! Spend some extra money on a good seating, as ours wasnt the best to enjoy the show. A life of a great performer as Tina isnt easy to show, but they did a great job.'
  },
  {
    avatar: AVTR4,
    name: 'Jhakhad Show',
    review: 'simply the best absolutely fantastic show from start to finish a fantastic end to a great day in london with my friend thank you. GO AND SEE IT! Spend some extra money on a good seating, as ours wasnt the best to enjoy the show. A life of a great performer as Tina isnt easy to show, but they did a great job.'
  }
]

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonial_container'
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
               <div className="client_avatar">
                 <img src={avatar}/> 
               </div>
               <h5 className='client_name'>{name}</h5>
               <small className='client_review'>{review}</small>
             </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial
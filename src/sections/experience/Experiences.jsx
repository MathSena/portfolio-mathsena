// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"

// import required modules
import { Pagination } from "swiper";


import experiences from './data'
import Experience from "./Experience";
import './experiences.css'


const Experiences= () => {
  return (
    <section id="experiences">
      <h2>My Experience</h2>
      <p>
        These are my jobs during my career in IT
      </p>
      <div className="container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          601: {slidesPerView: 2},
          1025: {slidesPerView: 3}
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        {
          experiences.map(experience => (
            <SwiperSlide key={experience.id}>
              <Experience experience={experience}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
    </section>
  )
}

export default Experiences
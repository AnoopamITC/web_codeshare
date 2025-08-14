import React from 'react';
import i1 from '@/assets/images/img1.png';
import i2 from '@/assets/images/img2.png';
import i3 from '@/assets/images/img3.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home.css';

const courses = [
  { id: 1, title: "Course 1" },
  { id: 2, title: "Course 2" },
  { id: 3, title: "Course 3" },
  { id: 4, title: "Course 4" },
  { id: 5, title: "Course 5" },
  { id: 6, title: "Course 6" },
  { id: 7, title: "Course 7" },
  { id: 8, title: "Course 8" },
  { id: 9, title: "Course 9" },
  { id: 10, title: "Course 10" },
  { id: 11, title: "Course 11" },
  { id: 12, title: "Course 12" },
]; 

const Home = () => {
  return (
    <>
      {/* ===== Top Section ===== */}
      <div className="home-container">
        <div className="home-content">
          <h1>Welcome to Our Site</h1>
          <p>
            This is some content that will stay on the left side. You can put
            text, buttons, or anything you want here.
          </p>
          <div className="home-buttons">
            <button className="btn-primary">Explore Courses</button>
            <button className="btn-secondary">Enquire Now</button>
          </div>
        </div>

        <div className="home-slider">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide><img src={i1} alt="Slide 1" /></SwiperSlide>
            <SwiperSlide><img src={i2} alt="Slide 2" /></SwiperSlide>
            <SwiperSlide><img src={i3} alt="Slide 3" /></SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* ===== Below Section ===== */}


      {/* ===== Courses Slider ===== */}
      <div className="courses-slider">
        <Swiper
          modules={[ Autoplay]}
          
          spaceBetween={10}
          slidesPerView={8}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 8 },
          }}
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="course-card">
                <h3>{course.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

 
    </>
  );
};

export default Home;

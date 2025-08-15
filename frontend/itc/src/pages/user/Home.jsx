import React from 'react';
import i1 from '@/assets/images/c1.png';
import i2 from '@/assets/images/c2.png';
import i3 from '@/assets/images/c3.png';
import i4 from '@/assets/images/ai.png';
import i5 from '@/assets/images/c.png';
import i6 from '@/assets/images/cpp.png';
import i10 from '@/assets/images/java.png';
import i11 from '@/assets/images/ml.png';
import i12 from '@/assets/images/office 365.png';
import i14 from '@/assets/images/php.png';
import i15 from '@/assets/images/powerbi.png';
import i16 from '@/assets/images/python.png';
import i17 from '@/assets/images/react.png';
import i18 from '@/assets/images/tally.png';
import a1 from '@/assets/images/a1.png';
import a2 from '@/assets/images/a2.png';
import  a3 from '@/assets/images/a3.jpg';
import a4 from '@/assets/images/a4.png';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home.css';

const courses = [
  { id: 1, title: "Course 1",Image:i4 },
  { id: 2, title: "Course 2",Image:i5 },
  { id: 3, title: "Course 3",Image:i6 },

  { id: 7, title: "Course 7",Image:i10 },
  { id: 8, title: "Course 8",Image:i11 },
  { id: 9, title: "Course 9",Image:i12 },

  { id: 11, title: "Course 11",Image:i14 },
  { id: 12, title: "Course 12",Image:i15 },
  { id: 12, title: "Course 12",Image:i16 },
  { id: 12, title: "Course 12",Image:i17 },
  { id: 12, title: "Course 12",Image:i18 },
];
const repeatedCourses = [...courses, ...courses];
 
const Home = () => {
  return (
    <>
      {/* ===== Top Section ===== */}
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

    {/* Images row under buttons */}
 <div className="home-images">
  <button className="btn"><span>Academic Partners</span></button>

  <div className="image-card">
    <img src={a1} alt="Partner 1" />
  </div>

  <div className="image-card">
    <img src={a2} alt="Partner 2" />
  </div>

  <div className="image-card">
    <img src={a3} alt="Partner 3" />
  </div>

  <div className="image-card">
    <img src={a4} alt="Partner 4" />
  </div>
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
        effect="fade"
        fadeEffect={{ crossFade: true }}
      >
        <SwiperSlide><img src={i3} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={i2} alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img src={i1} alt="Slide 3" /></SwiperSlide>
      </Swiper>
    </div>
</div>

     


      {/* ===== Courses Slider ===== */}
    <div className="courses-slider">
      <Swiper
  modules={[Autoplay]}
  spaceBetween={10}
  slidesPerView={10}
  loop={true}
  freeMode={true}
  freeModeMomentum={false}
  speed={2500} // 3s for a full slide movement
  allowTouchMove={false} // disables manual drag so it never pauses
  autoplay={{
    delay: 0,
    disableOnInteraction: false, // keep going even if touched
    pauseOnMouseEnter: false,
  }}
  breakpoints={{
    0: { slidesPerView: 1 },
    480: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 5 },
    1280: { slidesPerView: 8 },
    1480: { slidesPerView: 10 },
  }}
>
  {repeatedCourses.map((course, index) => (
    <SwiperSlide key={index}>
      <div className="course-card">
        <img src={course.Image} alt={course.title || `Course ${index + 1}`} />
      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </div>


    </>
  );
};

export default Home;

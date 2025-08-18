import React, { useEffect, useState, useRef } from 'react';
import i1 from '@/assets/images/itc1.png';
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
import t1 from "@/assets/images/t1.png"
import t2 from "@/assets/images/t2.png"
import t3 from "@/assets/images/t3.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, FreeMode} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home.css';
import { Users, Briefcase, Calendar, BookOpen,  ArrowUpRight } from "lucide-react";
import { MotionConfig, motion } from "framer-motion";
import Testimonial from "../../layout/ulayout/Testimonial";


// course slider
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
 

// counter 
function useCountUpOnView(target, durationMs = 10000) {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const start = performance.now();
            let raf = 0;
            const tick = (now) => {
              const t = Math.min(1, (now - start) / durationMs);
              setValue(Math.round(target * t));
              if (t < 1) raf = requestAnimationFrame(tick);
            };
            raf = requestAnimationFrame(tick);
            return () => cancelAnimationFrame(raf);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, durationMs, hasAnimated]);

  return { value, ref };
}


const items = [
   { id: "years", label: "Years", value: 37, icon: <Calendar size={20} /> },
    { id: "students", label: "Students", value: 80000, icon: <Users size={20} /> },
    { id: "corporate", label: "Corporate Training", value: 20000, icon: <Briefcase size={20} /> },
    { id: "courses", label: "Courses", value: 50, icon: <BookOpen size={20} /> },
   
  ];




  // top courses
  const courseList = [
  {
    title: "Artificial Intelligence",
    image: t1, // Replace with actual image path
    description:
      "Unlock the power of Artificial Intelligence through hands-on learning and expert guidance.",
    link: "#",
  },
  {
    title: "Web Development",
    image: t3, // Replace with actual image path
    description:
      "Unlock the power of Web Development through practical learning and expert-driven mentorship.",
    link: "#",
  },
  {
    title: "Cyber Security",
    image: t2, // Replace with actual image path
    description:
      "Unlock the power of Cybersecurity through hands-on experience and expert-led guidance.",
    link: "#",
  },
];

// corporat training 
const cards = [

  {
    // bgColor: "#ffffffff", // purple
    title: "Be Mentored 1:1 by Experienced Professionals",
    description:
      "Get Senior Industry experts as mentors to guide you with mock interviews, career advice, resume review, etc.",
    
  },
  {
    // bgColor: "#ffffffff", // orange
    title: "Become Part of a thriving community for life",
    description:
      "As part of our extensive alumni community you will find job referral, career advice, life advice, or your future co-founder – all in one place.",
    
  },
];

//  Achieviements
const awards = [
  { title: "Best Data Science Program", icon: "Images", logo: "toi.png" },
  { title: "Best Investment Program", icon: "Images", logo: "et.png" },
  { title: "Top Full Stack Development Program", icon: "Images", logo: "toi.png" },
  { title: "Best Data Science Program", icon: "Images", logo: "toi.png" },
  { title: "Best Data Science Program", icon: "Images", logo: "toi.png" },
];


const Home = () => {
  return (
    <>
    
 {/* ===== Top Section ===== */}
<div className="home-container">
  <div className="home-content">
    <h1>Best IT Training at Information Technology Centre</h1>
    <h3>Empower Your Career with Industry-Focused IT Courses</h3>
    <p>
  Step into the Future with ITC – Where knowledge meets opportunity. Our practical, job-focused courses equip you with the skills to thrive in today’s digital world.

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
  slidesPerView={10} // auto width for smooth continuous scroll
  loop={true}
  freeMode={true}
  freeModeMomentum={false}
  speed={2000} // slow & smooth
  allowTouchMove={false}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  }}
  style={{
    "--swiper-wrapper-transition-timing-function": "linear", // <-- Linear easing
  }}
>
  {repeatedCourses.map((course, index) => (
    <SwiperSlide
      key={index}
      style={{ width: "150px" }} // fixed card width
    >
      <div className="course-card">
        <img
          src={course.Image}
          alt={course.title || `Course ${index + 1}`}
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </div>



{/* Counter  */}
<div className="counter">
 <MotionConfig reducedMotion="user">
      <div className="counter-container">
        {items.map((item) => {
          const { value, ref } = useCountUpOnView(item.value, 900);
          return (
            <div key={item.id} className="counter-card" ref={ref}>
              
               <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="counter-value"
              >
                {value.toLocaleString()}+
              </motion.div><div className="counter-header">
                <span className="counter-icon">{item.icon}</span>
                <span className="counter-label">{item.label}</span>
              </div>
             
            </div>
          );
        })}
      </div>
    </MotionConfig>
    <div className="img-count">
      <img src={i1} alt='imge'/>
    </div>
</div>
{/* top courses */}
<div className="top-course">
  <h2>Top Courses</h2>

  <div className="courses-wrapper">
      <div className="courses-container">
        {courseList.map((course, index) => (
          <div key={index} className="course">
            <h3 className="course-title">{course.title}</h3>
            <img src={course.image} alt={course.title} className="course-image" />
            <p className="course-description">{course.description}</p>
            <a href={course.link} className="explore-button">
              Explore More <ArrowUpRight size={18} />
            </a>
          </div>
        ))}
      </div>
      <div className="view-all-wrapper">
        <a href="#" className="view-all-button">
          View All Courses <ArrowUpRight size={18} />
        </a>
      </div>
    </div>
</div>




{/* Corporate training  */}
<div className="training">
  <h2>Corporate Training</h2>
 <div className="info-cards-container">
      {cards.map((card, index) => (
        <div key={index} className="info-card">
          <div
            className="card-top"
            // style={{ backgroundColor: card.bgColor }}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
          {/* <div className="card-image">
            <img src={card.image} alt={card.title} />
          </div> */}
        </div>
      ))}
    </div>
 </div>
{/* Achieviements */}

    <div className="awards-section">
      <h2 className="awards-title">
        <span className='red'> Our </span> <span className='Blue'>Achievements</span>
      </h2>

      <div className="awards-icons">
        {awards.map((award, index) => (
          <div key={index} className="award-item">
          <h2> {award.icon} </h2>
            <p>{award.title}</p>
          </div>
        ))}
      </div>
      </div>

<div className="review">
<Testimonial/>
</div>
    </>
  );
};

export default Home;

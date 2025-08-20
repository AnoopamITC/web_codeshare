import React, { useEffect, useState, useRef } from 'react';
import i1 from '@/assets/images/itc1.png';
import i2 from '@/assets/images/c2.png';
import i3 from '@/assets/images/c3.png';
import i4 from '@/assets/images/1.jpg';
import i5 from '@/assets/images/2.jpg';
import i6 from '@/assets/images/3.jpg';
import i10 from '@/assets/images/4.jpg';
import i11 from '@/assets/images/5.jpg';
import i12 from '@/assets/images/6.jpg';
import i14 from '@/assets/images/7.jpg';
import i15 from '@/assets/images/8.jpg';
import i16 from '@/assets/images/9.jpg';
import i17 from '@/assets/images/10.jpg';
import i18 from '@/assets/images/11.jpg';
import i19 from '@/assets/images/12.jpg';
import i20 from '@/assets/images/13.jpg';
import i21 from '@/assets/images/14.jpg';
import i22 from '@/assets/images/15.jpg';
import i23 from '@/assets/images/16.jpg';
import i24 from '@/assets/images/17.jpg';
import a1 from '@/assets/images/a1.png';
import a2 from '@/assets/images/a2.png';
import  a3 from '@/assets/images/a3.jpg';
import a4 from '@/assets/images/a4.png';
import t1 from "@/assets/images/t1.png"
import t2 from "@/assets/images/t2.png"
import t3 from "@/assets/images/t3.png"
import h4c from "@/assets/images/help4career.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, FreeMode, EffectFade} from 'swiper/modules';
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
  { id: 3, title: "Course 3",Image:i19 },
  { id: 4, title: "Course 4",Image:i20 },
  { id: 5, title: "Course 5",Image:i21 },
  { id: 6, title: "Course 6",Image:i22 },
  { id: 7, title: "Course 7",Image:i10 },
  { id: 8, title: "Course 8",Image:i11 },
  { id: 9, title: "Course 9",Image:i12 },
  { id: 10, title: "Course 10",Image:i23 },
  { id: 11, title: "Course 11",Image:i14 },
  { id: 12, title: "Course 12",Image:i15 },
  { id: 13, title: "Course 13",Image:i16 },
  { id: 14, title: "Course 14",Image:i17 },
  { id: 15, title: "Course 15",Image:i18 },
  { id: 16, title: "Course 16",Image:i24 },
  { id: 17, title: "Course 17",Image:i6 },


];
const repeatedCourses = [...courses, ...courses];
 

// counter 

function useCountUpOnView(target, durationMs = 2000) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // reset counter every time
            const start = performance.now();
            let raf;

            const tick = (now) => {
              const t = Math.min(1, (now - start) / durationMs);
              setValue(Math.round(target * t));
              if (t < 1) raf = requestAnimationFrame(tick);
            };

            raf = requestAnimationFrame(tick);

            return () => cancelAnimationFrame(raf);
          } else {
            // 👇 reset to 0 when out of view
            setValue(0);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, durationMs]);

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
<div className='home-main'>
  <div className="home-container">
  <div className="home-content">
    <h1>Best IT Training at <span style={{color:'#d71920'}}>Information Technology Centre</span></h1>
    <h3>Empower Your Career with Industry-Focused <span style={{color:'#d71920'}}>IT Courses</span></h3>
    <p>
At Information Technology Centre (ITC), we believe that the right skills can transform your future.
Our mission is to bridge the gap between education and industry by offering hands-on training, real-world projects, and career-focused programs.

    </p>
     <div className="home-buttons">
      <button className="btn-primary">Explore Courses</button>
      <button className="btn-secondary">Enquire Now</button>
           <button className="btn-secondary">Get services</button>
      <button className="btn-secondary">Latest Offers</button>
    </div>
   <section class="career-section">
  <div class="career-box">
    <div class="career-left">
      <img src={h4c} alt="Help4Career Logo" />
    </div>
    <div class="career-right">
      <h4 class="career-title">Discover Your Perfect Career</h4>
      <p class="career-subtitle">AI-based counselling that helps you explore opportunities, plan effectively, and achieve your dream career.</p>
      <a href="https://www.help4career.com/" target='_blank' class="career-btn">Start Now</a>
    </div>
    
  </div>
</section>

    
    

    {/* Images row under buttons */}
 {/* <div className="home-images">
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
</div> */}

  </div>

  <div className="home-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
    
      >
        <SwiperSlide><img src={i3} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={i2} alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img src={i1} alt="Slide 3" /></SwiperSlide>
      </Swiper>
    </div>
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

<MotionConfig reducedMotion="user">
  <div className="counter-container">
    {items.map((item) => {
      const { value, ref } = useCountUpOnView(item.value, 900);
      return (
        <div key={item.id} className="counter-card" ref={ref}>
          {/* Number at top */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="counter-value"
          >
            {value.toLocaleString()}+
          </motion.div>

          {/* Icon + Text side-by-side */}
          <div className="counter-header">
            <span className="counter-icon">{item.icon}</span>
            <span className="counter-label">{item.label}</span>
          </div>
        </div>
      );
    })}
  </div>
</MotionConfig>

{/* top courses */}
<div className="top-course">
 

  <div className="courses-wrapper">
     <h2>Top Courses</h2>
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

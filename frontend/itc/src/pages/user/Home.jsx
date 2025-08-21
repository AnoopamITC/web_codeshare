import React, { useEffect, useState, useRef } from 'react';
import i1 from '@/assets/images/itc1.png';
import i2 from '@/assets/images/s1.png';
import i3 from '@/assets/images/s3.png';
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
import ai1 from '@/assets/images/a1.jpg'
import ai2 from '@/assets/images/a2.jpg'
import ai3 from '@/assets/images/a5.jpg'
import ai4 from '@/assets/images/a6.jpg'
import ai5 from '@/assets/images/a7.jpg'
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
import { Users, Briefcase, Calendar, BookOpen,  ArrowUpRight, BadgeCheck,  } from "lucide-react";
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
  //  { id: "legacy", type: "text", label: "Legacy of Excellence" },
   { id: "years", label: "Years", value: 37, icon: <Calendar size={20} /> },
    { id: "students", label: "Students", value: 85000, icon: <Users size={20} /> },
    { id: "corporate", label: "Corporate Training", value: 300, icon: <Briefcase size={20} /> },
    { id: "recruitment", label: "Recruiters", value: 1000, icon: <BadgeCheck size={20} /> },
    { id: "courses", label: "Courses", value: 35, icon: <BookOpen size={20} /> },
   
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
    title: "Multimedia",
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
    title: "Student Internship",
    img: t1,
  },
  {
    title: "Industry Project",  
    img: "",
  },
  {
    title: "Corporate Training",
    img: "",
  },
  {
    title: "", 
    img: "", 
  },
  {
    title: "",  
    img: "",
  },
];

//  Achieviements



const cardData = [
  { id: 1, img: ai1, text: "Best Computer Training Center Award DOEACC O Level, Govt. of India, 1996" },
  { id: 2, img: ai2, text: "First Position in the National Level Project Presentation Competiton Organized by DOEACC Socity, 1996" },
  { id: 3, img: ai3, text: "Best Computer Training Center Award DOEACC O Level, Govt. of India, 2000" },
  { id: 4, img: ai4, text: "First Position in the National Level Project Presentation Competiton Organized by DOEACC Socity, 2001" },
  { id: 5, img: ai5, text: "Best Computer Training Center Award DOEACC O Level, Govt. of India, 2003" },
  { id: 6, img: ai2, text: "First Position in the National Level Project Presentation Competiton Organized by DOEACC Socity" },
  { id: 7, img: ai3, text: "Best Instructor Award form Autodesk Inc., USA" },
  { id: 8, img: ai4, text: "Best Instructor Award form Autodesk Inc., USA" },
  // { id: 9, img: ai5, text: "Card Fi" },
 
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
      <button className="btn-secondary">Explore Courses</button>
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
  freeModeMomentum={true}
  speed={2000} // slow & smooth
  allowTouchMove={false}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
   breakpoints={{
        320: { slidesPerView: 4}, // small screen
        640: { slidesPerView: 5 },
        1024: { slidesPerView: 6 },
        1440: { slidesPerView: 10 }, // big screen
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


<MotionConfig reducedMotion="user">
  <div className="counter-container">
     <div className="relative flex items-center justify-center h-40 bg-gray-200 overflow-hidden">
      {/* Oval Frame Background */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-36 bg-red-600 rounded-r-full"
      ></motion.div>
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="relative text-4xl font-bold text-black text-center"
      >
        Legacy <br /> of <br /> Excellence
      </motion.h1>
    </div>
    {items.map((item) => {
      if (item.type === "text") {
        return (
          <div key={item.id} className="counter-card special-card">
            <div className="legacy-text">{item.label}</div>
          </div>
        );
      }

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
          </motion.div>

          <div className="counter-header">
            <span className="counter-icon">{item.icon}</span>
            <span className="counter-label">{item.label}</span>
          </div>
        </div>
      );
    })}
  </div>
</MotionConfig>



{/* Counter  */}

{/* <MotionConfig reducedMotion="user">
  <div className="counter-container">
    {items.map((item) => {
      const { value, ref } = useCountUpOnView(item.value, 900);
      return (
        <div key={item.id} className="counter-card" ref={ref}> */}
          {/* Number at top */}
          {/* <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="counter-value"
          >
            {value.toLocaleString()}+
          </motion.div> */}

          {/* Icon + Text side-by-side */}
          {/* <div className="counter-header">
            <span className="counter-icon">{item.icon}</span>
            <span className="counter-label">{item.label}</span>
          </div>
        </div>
      );
    })}
  </div>
</MotionConfig> */}

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
      {/* <div className="view-all-wrapper">
        <a href="#" className="view-all-button">
          View All Courses <ArrowUpRight size={45}  />
        </a>
        <button className='course-button'>View All Courses</button>
      </div> */}
      <div className="view-all-courses-btn-wrapper">
          <button className="view-all-courses-button">View All Courses</button>
          <span className="view-all-courses-arrow-circle">
            <span className="view-all-courses-arrow-icon">&#8599;</span>
          </span>
      </div>
    </div>
</div>




{/* Corporate training  */}
<div className="training">
  <h2>Academic & Industry Connect</h2>
 <div className="info-cards-container">
      {cards.map((card, index) => (
        <div key={index} className="info-card">
          <div
            className="card-top"
            // style={{ backgroundColor: card.bgColor }}
          >
            <h3>{card.title}</h3>
           
          </div>
          {/* <div className="card-image">
            <img src={card.image} alt={card.title} />
          </div> */}
           <p>{card.description}</p>
        </div>
      ))}
    </div>
 </div>
{/* Achieviements */}

  <div className="awards-section">
  <div className="slider-container" style={{ padding: "40px" }}>
    
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={20}
      slidesPerView={4}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
      className="mySwiper"
    >
      {/* Slides */}
      {cardData.map((card) => (
        <SwiperSlide key={card.id}>
          <div
            style={{
              border: "1.5px solid #ff0000",
              borderRadius: "10px",
              height: "380px",
              overflow: "hidden",
              textAlign: "center",
              background: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={card.img}
              alt={card.text}
              style={{ width: "250px", height: "250px", objectFit: "contain", padding: "20px" }}
            />
            <h4 style={{ padding: "5px", margin: "5px" }}>{card.text}</h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <h2 className="awards-title">
      <span> Our </span> <br /><span className='Blue'>Achievements</span>
    </h2>
  </div>
</div>

<div className="review">
<Testimonial/>
</div>
<div className="indust">
  <div className="indust-text">
    <h1>infrastructure</h1>  
    <p>Lorem ipsum dolor, sit amet consectetur a
      dipisicing elit. Harum ea magnam qui cumque.<br/>
       Explicabo, voluptatibus! Adipisci cumque voluptatum,<br/>
        ut accusamus quisquam dicta, 
      molestias quo tempore odit dolor dolores recusandae nam.</p></div>

    <div className="indust-img">
      <img src={i15} alt="" />
      <img src={i15} alt="" />
      <img src={i15} alt="" />
      <img src={i15} alt="" />
      <img src={i15} alt="" />
      <img src={i15} alt="" />
    </div>
</div>
{/* <h1></h1> */}
    </>
  );
};

export default Home;

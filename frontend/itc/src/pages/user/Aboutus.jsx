import React, { useState,useRef,useEffect } from 'react';
import './AboutUS.css';
import { Handshake, Users, Award, Users2, Layers, ClipboardCheck } from "lucide-react";
import v1 from '@/assets/images/vision.png'
import v2 from '@/assets/images/mission.png'
const AboutUs = () => {
  const years = [
      '1988', '1992', '1996', '1998', '2000', '2002',
      '2003',
      
    ];
  
    const [selectedIndex, setSelectedIndex] = useState(0);
    const yearRefs = useRef([]);
    const cardRef = useRef(null);
    const [dotPosition, setDotPosition] = useState(0);
    const [lineWidth, setLineWidth] = useState(0);
    const [activeFrame, setActiveFrame] = useState('frame-one');
  
  

    const updateTimelinePosition = (index, shouldScroll = true) => {
  const parent = yearRefs.current[index]?.parentElement;
  const child = yearRefs.current[index];
  if (parent && child) {
    const parentRect = parent.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();
    const offset = childRect.left - parentRect.left + childRect.width / 2;
    setDotPosition(offset);
    setLineWidth(offset);
    if (shouldScroll) {
     child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

    }
  }
};

  
    const handleFrameClick = (frameName) => {
      setActiveFrame(frameName);
    };
  
    const handleYearClick = (index) => {
      setSelectedIndex(index);
      updateTimelinePosition(index);
  
      if (cardRef.current) {
        cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  
    const handlePrev = () => {
      if (selectedIndex > 0) {
        const newIndex = selectedIndex - 1;
        setSelectedIndex(newIndex);
        updateTimelinePosition(newIndex);
  
        if (cardRef.current) {
          cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
  
    const handleNext = () => {
      if (selectedIndex < years.length - 1) {
        const newIndex = selectedIndex + 1;
        setSelectedIndex(newIndex);
        updateTimelinePosition(newIndex);
  
        if (cardRef.current) {
          cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
  
    useEffect(() => {
  updateTimelinePosition(selectedIndex, false); 
}, []);

  

  return (
    <>
    <div className="about-container">
      <div className="about-overlay">
        <div className="about-content">
          <h1>
            Who <span><b>We Are?</b></span>
          </h1>
          <p>
            Information Technology Centre (ITC) is one of Gujaratâ€™s leading computer learning institutes 
            located in Mogri. We offer a wide range of courses, from basic to advanced technologies. 
            ITC empowers youth to access career-oriented skills, deepen the quality of education, 
            and strengthen both skill development and moral responsibility.
          </p>
             <div className="explore-courses-btn-group">
              <button className="explore-courses-button">
                Explore Courses
              </button>
              <span className="explore-courses-arrow-circle">
                <span className="explore-courses-arrow-icon">&#8599;</span>
              </span>
            </div>


        </div>
      </div>
    </div>
   <div className="outer-history-container">

      <h2 className="history-title p-5">Discover <span>Our History</span></h2>

      <section className="history-section">
        <div className="history-content">
          <div className="history-card" ref={cardRef}>
            <div className="year-label">{years[selectedIndex]}</div>
            <h3>Establishment of ITC</h3>
            <ul>
              <li>Founded in Mogri, Gujarat under Anoopam Mission</li>
              <li>Became India’s oldest Autodesk Authorized Training Center</li>
              <li>Became the first NIELIT (DOEACC Society) Training Centre</li>
              <li>Laid the foundation for high-quality IT education in rural India</li>
            </ul>
          </div>

          <div className="photo-frame-container">
            <div
              className={`photo-frame frame-one ${activeFrame === 'frame-one' ? 'active-frame' : ''}`}
              onClick={() => handleFrameClick('frame-one')}
            >
              <img src="https://placehold.co/450x350" alt="History 1" />
            </div>

            <div
              className={`photo-frame frame-two ${activeFrame === 'frame-two' ? 'active-frame' : ''}`}
              onClick={() => handleFrameClick('frame-two')}
            >
              <img src="https://placehold.co/450x350" alt="History 2" />
            </div>
          </div>
        </div>

        <div className="timeline-nav">
          <button className="nav-btn" onClick={handlePrev}>{'←'}</button>
          <button className="nav-btn" onClick={handleNext}>{'→'}</button>
        </div>
      </section>

      <div className="timeline-container">
        <div className="timeline-years-scroll">
          <div className="timeline-line-full"></div>
          <div className="timeline-line-progress" style={{ width: `${lineWidth}px` }}></div>
          <div className="timeline-moving-dot" style={{ left: `${dotPosition}px` }}></div>

          {years.map((year, index) => (
            <div
              key={index}
              ref={(el) => (yearRefs.current[index] = el)}
              className="timeline-year-wrapper"
              onClick={() => handleYearClick(index)}
            >
              <div className={`year-dot ${selectedIndex === index ? 'active-dot' : ''}`}></div>
              <div className={`timeline-year ${selectedIndex === index ? 'active-year' : ''}`}>
                {year}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="mission-vision-container">
        <div className="mission-vision-card">
          <h3>Our Mission</h3>
          <p>
            To provide smart, scalable, and sustainable IT<br />
            services that help clients achieve their digital<br />
            transformation goals with confidence and clarity.
          </p>
        </div>

        <div className="mission-vision-card">
          <h3>Our Vision</h3>
          <p>
            To be the preferred IT partner for organizations<br />
            seeking innovative, secure, and customer-<br />
            focused technology solutions.
          </p>
        </div>
      </div> */}
 <div className="mission-vision-wrapper">
      {/* Vision & Mission cards */}
      <div className="mission-vision-cards">
        <div className="mv-card">
          {/* <Target size={60} strokeWidth={1.5} /> */}
          <img src={v1} alt='v1'/>
          <h3>OUR VISION</h3>
          <p>
       “To sustain our position as Gujarat’s No. 1 
       Computer Training Centre by continuously empowering 
       youth with future-ready IT skills, upholding strong values,
        and expanding as a hub of innovation, employability, and 
        entrepreneurship in the digital era.”
          </p>
        </div>

        <div className="mv-card">
          {/* <Eye size={60} strokeWidth={1.5} /> */}
            <img src={v2} alt='v1'/>
          <h3>OUR MISSION</h3>
          <p>
      “Our mission is to deliver affordable, high-quality IT education to learners 
      of all backgrounds through hands-on, industry-aligned training and
       real-world projects, creating career pathways in emerging fields 
       such as AI, Full Stack Development, Cloud Computing, Data Science, 
       and AR/VR, while fostering lifelong learning, adaptability, and innovation.”
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="values-section">
        <h2>OUR VALUES DEFINE OUR BUSINESS</h2>
        <div className="values-grid">
          <div className="value-card">
            
            <Handshake size={40} />
            <span>Customer Commitment</span>
          </div>
          <div className="value-card">
            <Users2 size={40} />
            <span>Interactive</span>
          </div>
          <div className="value-card">
            <Award size={40} />
            <span>Service Excellence</span>
          </div>
          <div className="value-card">
            <Layers size={40} />
            <span>Collaboration</span>
          </div>
          <div className="value-card">
            <Users size={40} />
            <span>Leadership</span>
          </div>
          <div className="value-card">
            <ClipboardCheck size={40} />
            <span>Accountability</span>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default AboutUs;

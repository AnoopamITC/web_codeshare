import React, { useState, useRef, useEffect } from 'react';
import './OurHistory.css';

const OurHistory = () => {
  const years = [
    '1984', '1996', '1998', '2000', '2002', '2005',
    '2008', '2010', '2012', '2015', '2018', '2020',
    '2023', '2025'
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const yearRefs = useRef([]);
  const cardRef = useRef(null);
  const [dotPosition, setDotPosition] = useState(0);
  const [lineWidth, setLineWidth] = useState(0);
  const [activeFrame, setActiveFrame] = useState('frame-one');

  const updateTimelinePosition = (index) => {
    const parent = yearRefs.current[index]?.parentElement;
    const child = yearRefs.current[index];
    if (parent && child) {
      const parentRect = parent.getBoundingClientRect();
      const childRect = child.getBoundingClientRect();
      const offset = childRect.left - parentRect.left + childRect.width / 2;
      setDotPosition(offset);
      setLineWidth(offset);
      child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
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
    updateTimelinePosition(selectedIndex);
  }, []);

  return (
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

      <div className="mission-vision-container">
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
      </div>
    </div>
  );
};

export default OurHistory;

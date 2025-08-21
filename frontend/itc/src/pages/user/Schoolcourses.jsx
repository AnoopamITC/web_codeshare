
import React from "react";
import "./Schoolcourses.css";
import bannerImg from "../../assets/images/schoolcourses.png"; // replace with your image
import { FaPaperPlane, FaPlay } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import t1 from "@/assets/images/skill.jpg";
import t2 from "@/assets/images/kids.png";
import t3 from "@/assets/images/vacation.jpg";

const Schoolcourses = () => {
  const courseList = [
    {
      title: "Skill Development",
      image: t1,
      description:
        "Enhance your creativity and technical skills with hands-on training and practical learning.",
      link: "#",
    },
    {
      title: "Kids Learning",
      image: t2,
      description:
        "Fun-filled and engaging courses designed for kids to learn, play, and grow smarter every day.",
      link: "#",
    },
    {
      title: "Vacation Programs",
      image: t3,
      description:
        "Make your vacation productive with exciting courses, activities, and lifelong learning experiences.",
      link: "#",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="hero-sectionss">
        <div className="hero-content">
          <h1>Professional Courses in Anand</h1>
          <p>
            Explore our career-focused programs designed to build practical skills
            and industry experience. From Graphic Design to Programming,
            Multimedia, and Office Automation — master the tools and technologies
            needed for today’s competitive world.
          </p>

          <ul className="hero-features">
            <li>Graphic Design: AI-powered branding, marketing & motion graphics</li>
            <li>Programming: Python, Java, C++, and Full-Stack Development</li>
            <li>Multimedia: Video Editing, Animation, and VFX Projects</li>
            <li>Office Automation: MS Office, Advanced Excel & workplace tools</li>
            <li>Industry Experience with Live Projects</li>
            <li>Portfolio Development & Certification</li>
          </ul>

          <div className="hero-buttons">
            <button className="apply-btn">
              <FaPaperPlane style={{ marginRight: "8px" }} />
              Apply Now
            </button>
            <button className="demo-btn">
              <FaPlay style={{ marginRight: "8px" }} />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img className="immg" src={bannerImg} alt="Graphic Design" />
        </div>
      </div>

      {/* Courses Section */}
      <div className="courses-sectionn">
        <div className="courses-wrappern">
          <h2 className="courses-headingn">Top Courses</h2>
          <div className="courses-gridn">
            {courseList.map((course, index) => (
              <div key={index} className="course-cardn">
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-imgn"
                />
                <h3 className="course-titlen">{course.title}</h3>
                <p className="course-descn">{course.description}</p>
                <a href={course.link} className="course-btns">
                  Explore More <ArrowUpRight size={16} />
                </a>
              </div>
            ))}
          </div>
          <div className="courses-footern">
            <a href="#" className="view-all-btns">
              View All Courses <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schoolcourses;

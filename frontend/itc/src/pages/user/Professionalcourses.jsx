import React from "react";
import "./Professionalcourses.css";


const courses = [
  {
    title:   "Artificial Intelligence (AI)",
    desc: "Unlock the power of AI! Learn how machines think, learn, and make decisions. This course covers machine learning, neural networks, and real-world AI applications—perfect for future tech leaders.",
    
  },
  {
  title:   "Fullstack Web Developer  ",
  desc: "Build complete web solutions from start to finish. Learn to create dynamic, responsive websites using modern tools like HTML, CSS, JavaScript, React, Node.js, and databases. ",
  },
  {
  title:    "Multimedia & AR/VR",
  desc: "Step into the future of digital experiences! Learn to create immersive visuals, interactive 3D environments, and virtual worlds using the latest AR/VR technologies. Perfect for creative minds ready to blend art and innovation.",
  },
  {
  title:  "2D/3D Engineering(CAD/CAM)",
  desc: "Learn professional design and manufacturing tools. Create accurate 2D drafts, 3D models, and automate machining with CAM. Perfect for engineering and design careers.",
  },
  {
  title:"Data Analysis and Office Activity",
  desc: "Turn data into decisions! Learn to collect, clean, visualize, and analyze data using tools like Excel, Python, and SQL. Ideal for anyone looking to make data-driven insights.",
  },
  {
  title:     "Accounting(Tally Prime)",
  desc: "Learn practical accounting using Tally Prime. Master GST, invoicing, inventory, and financial reports. Perfect for students, business owners, and aspiring accountants.",
  },
  {
  title:   "AWS Cloud Computing Networking",
  desc: "Learn to build, manage, and secure cloud infrastructure on AWS. Understand core services, networking, storage, and deployment. Ideal for IT professionals and cloud beginners.",
  },
  {
  title: "Hardware Mobile Repairing IoT",
  desc: "Get hands-on with device repair and smart tech! Learn computer hardware, mobile troubleshooting, and the basics of IoT to build and connect smart devices. Perfect for tech enthusiasts and future technicians.",
  },
  {
  title:   "Ethicial Hacking Cyber Security",
  desc: "Learn to protect systems like a pro! Master ethical hacking, network defense, and cybersecurity tools to detect and prevent cyber threats. Ideal for future ethical hackers and IT security professionals.",
  },

];

const menuItems = [
  "Artificial Intelligence (AI)",
  "Fullstack Web Developer programming ",
  "Multimedia & AR/VR",
  "2D/3D Engineering(CAD/CAM)",
  "Data Analysis and Office Activity",
  "Accounting(Tally Prime)",
  "AWS Cloud Computing Networking",
  "Hardware Mobile Repairing IoT",
  "Ethicial Hacking Cyber Security",
];

const Professionalcourses = () => {
  return (
    <>

    <div className="courses-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">Professional Courses</div>
        <div className="menu">
          {menuItems.map((item, i) => (
            <div className="menu-item" key={i}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="cards">
        {courses.map((course, i) => (
          <div className="card" key={i}>
           
            <h3>{course.title}</h3>
            <p>{course.desc}</p>
            <button>Know More</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Professionalcourses;

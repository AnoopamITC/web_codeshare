import React from "react";
import { useNavigate } from "react-router";

const courses = [
  {
    category: "Programming",
    title: "React Fundamentals",
    description:
      "Learn the basics of React including components, props, state, and hooks in this comprehensive course.",
    price: "$99",
    students: 156,
    lessons: 12,
    duration: "8h",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=600&q=80",
  },
  {
    category: "Programming",
    title: "Python for Beginners",
    description:
      "Start your programming journey with Python. Learn syntax, data structures, and build real projects.",
    price: "$79",
    students: 142,
    lessons: 15,
    duration: "10h",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fit=crop&w=600&q=80",
  },
  {
    category: "Design",
    title: "Web Design Mastery",
    description:
      "Master modern web design principles, UI/UX best practices, and responsive design techniques.",
    price: "$149",
    students: 128,
    lessons: 18,
    duration: "14h",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=600&q=80",
  },
];

const AllCourses = () => { 
  const navigate = useNavigate();
  // Repeat courses to make 8 cards for demonstration
  const courseList = Array.from({ length: 8 }).map((_, idx) => courses[idx % courses.length]);

  return (
    <div className="cm-wrapper">
      {/* Header */}
      <div className="cm-header">
        <div>
          <h1 className="cm-title">Courses Management</h1>
          <p className="cm-subtitle">Create, edit, and manage your course catalog</p>
        </div>
        <button className="cm-add-btn" onClick={() => navigate('/AddCourses')}>+ Add New Course</button>
      </div>

      {/* Filters */}
      <div className="cm-filters">
        <input type="text" placeholder="Search courses..." className="cm-search" />
        <select className="cm-category">
          <option value="">All Categories</option>
          <option value="Programming">Programming</option>
          <option value="Design">Design</option>
        </select>
        <button className="cm-filter-btn">Filter</button>
        <select className="cm-export">
          <option value="">Export</option>
          <option value="CSV">CSV</option>
          <option value="Excel">Excel</option>
        </select>
      </div>

      {/* Courses Grid */}
      <div className="cm-grid">
        {courseList.map((course, idx) => (
          <div className="cm-card" key={idx}>
            <div className="cm-img-container">
              <img src={course.image} alt={course.title} className="cm-img" />
              <span className="cm-price-tag">{course.price}</span>
            </div>
            <div className="cm-card-content">
              <span className="cm-category-tag">{course.category}</span>
              <h3 className="cm-card-title">{course.title}</h3>
              <p className="cm-card-desc">{course.description}</p>
              <div className="cm-stats">
                <span>👨‍🎓 {course.students} students</span>
                <span>📚 {course.lessons} lessons</span>
                <span>⏰ {course.duration}</span>
              </div>
              <div className="cm-actions">
                <button className="cm-edit-btn">Edit</button>
                <button className="cm-delete-btn">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

     
   
    </div>
  );
};

export default AllCourses;

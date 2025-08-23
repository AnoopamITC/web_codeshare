import React, { useState } from 'react';
import { FaBook, FaChalkboardTeacher, FaTags, FaDollarSign, FaCalendarAlt } from 'react-icons/fa';
import '../admin/AddCourses.css'
const AddCourses = () => {
  const [formData, setFormData] = useState({
    courseTitle: '',
    courseCode: '',
    instructor: '',
    category: '',
    subCategory: '',
    duration: '',
    level: '',
    language: '',
    price: '',
    discount: '',
    startDate: '',
    endDate: '',
    maxStudents: '',
    description: '',
    prerequisites: '',
    objectives: '',
    resources: '',
    certificate: '',
    rating: '',
    tags: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Course Added Successfully!");
  };

  const sections = [
    { title: 'Basic Info', fields: ['courseTitle','courseCode','instructor','category','subCategory','level','language'] },
    { title: 'Schedule', fields: ['duration','startDate','endDate','maxStudents'] },
    { title: 'Pricing', fields: ['price','discount','certificate','rating'] },
    { title: 'Content & Tags', fields: ['description','prerequisites','objectives','resources','tags'] },
  ];

  return (
    <div className="adm-addcourse-container">
      <h1 className="adm-addcourse-title">Add New Course</h1>
      <form className="adm-addcourse-form" onSubmit={handleSubmit}>
        {sections.map((section, idx) => (
          <div key={idx} className="adm-form-section">
            <h2 className="adm-section-title">{section.title}</h2>
            <div className="adm-section-fields">
              {section.fields.map((field, i) => (
                <div key={i} className="adm-form-group">
                  <label htmlFor={field}>
                    {field.replace(/([A-Z])/g, ' $1')}
                  </label>
                  {['description','prerequisites','objectives','resources'].includes(field) ? (
                    <textarea
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="adm-form-input adm-form-textarea"
                      placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1')}`}
                    />
                  ) : (
                    <input
                      type={['price','discount','rating'].includes(field)? 'number':'text'}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="adm-form-input"
                      placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1')}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <button type="submit" className="adm-submit-btn">Add Course</button>
      </form>

      
    </div>
  );
};

export default AddCourses;

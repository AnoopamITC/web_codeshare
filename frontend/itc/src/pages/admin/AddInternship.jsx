import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./addinternship.css";

const AddInternship = ({ onInternshipAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    fees: "",
    eligibility: "",
    mode: "Online",
    status: true,
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (let key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      if (image) {
        formDataToSend.append("image", image);
      }

      const res = await axios.post("http://127.0.0.1:8000/api/admin/add-internship/", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert(res.data.message);

      if (onInternshipAdded) {
        onInternshipAdded(res.data);
      }

      setFormData({
        title: "",
        description: "",
        duration: "",
        fees: "",
        eligibility: "",
        mode: "Online",
        status: true,
      });
      setImage(null);
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Error adding internship");
    }
  };

  return (
    <motion.div
      className="form-container"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="form-header">Add Internship</h2>
      <form onSubmit={handleSubmit} className="form-box">
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required className="form-input" />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required className="form-input" />
        <input type="text" name="duration" placeholder="Duration" value={formData.duration} onChange={handleChange} required className="form-input" />
        <input type="number" step="0.01" name="fees" placeholder="Fees" value={formData.fees} onChange={handleChange} required className="form-input" />
        <textarea name="eligibility" placeholder="Eligibility" value={formData.eligibility} onChange={handleChange} required className="form-input" />
        
        <select name="mode" value={formData.mode} onChange={handleChange} className="form-input">
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
          <option value="Hybrid">Hybrid</option>
        </select>

        <label className="checkbox">
          <input type="checkbox" name="status" checked={formData.status} onChange={handleChange} /> Active
        </label>

        {/* ✅ Image Upload */}
        <input type="file" accept="image/*" onChange={handleImageChange} className="form-input" />

        <motion.button type="submit" className="form-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Add Internship
        </motion.button>
      </form>
    </motion.div>
  );
};

export default AddInternship;

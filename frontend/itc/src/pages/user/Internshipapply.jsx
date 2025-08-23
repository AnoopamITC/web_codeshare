import React, { useState, useEffect } from "react";
import axios from "axios";
import "./internship.css";

const InternshipApply = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    college: "",
    resume: null,
    recommendation: null,
    progressReport: null,
    internshipType: "",
    durationFrom: "",
    durationTo: "",
    yearOfStudy: "",
    email: "",
    mobile: "",
    timing: "",
    sampleCertificate: null,
    areaOfInterest: "",
    paymentOption: "",
    inTime: "",
    outTime: "",
  });

  const [internshipTypes, setInternshipTypes] = useState([]);

  // Fetch internship types (if your backend supports it)
  useEffect(() => {
    const fetchInternshipTypes = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/user/internship-types/");
        setInternshipTypes(res.data.types);
      } catch (err) {
        console.error("Error fetching internship types", err);
      }
    };
    fetchInternshipTypes();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await axios.post("http://127.0.0.1:8000/api/user/applyinternship/", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Application submitted successfully!");

      // Reset form after success
      setFormData({
        name: "",
        gender: "",
        college: "",
        resume: null,
        recommendation: null,
        progressReport: null,
        internshipType: "",
        durationFrom: "",
        durationTo: "",
        yearOfStudy: "",
        email: "",
        mobile: "",
        timing: "",
        sampleCertificate: null,
        areaOfInterest: "",
        paymentOption: "",
        inTime: "",
        outTime: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to submit application.");
    }
  };

  return (
    <div className="internship-container">
      <div className="internship-card">
        <h2>Internship Application Form</h2>
        <form onSubmit={handleSubmit} className="internship-form">

          {/* Name + Gender */}
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* College */}
          <input
            type="text"
            name="college"
            placeholder="College Name"
            value={formData.college}
            onChange={handleChange}
            required
          />

          {/* File Uploads */}
          <label>Resume Upload</label>
          <input type="file" name="resume" onChange={handleChange} required />

          <label>Recommendation Letter Upload</label>
          <input type="file" name="recommendation" onChange={handleChange} />

          <label>Progress Report Upload</label>
          <input type="file" name="progressReport" onChange={handleChange} />

          {/* Internship type
          <select
            name="internshipType"
            value={formData.internshipType}
            onChange={handleChange}
            required
          >
            <option value="">Select Internship Type</option>
            {internshipTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select> */}

          {/* Duration */}
          <div className="form-row">
            <div>
              <label>Duration From</label>
              <input
                type="date"
                name="durationFrom"
                value={formData.durationFrom}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Duration To</label>
              <input
                type="date"
                name="durationTo"
                value={formData.durationTo}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Year + Email */}
          <div className="form-row">
            <input
              type="text"
              name="yearOfStudy"
              placeholder="Year of Study"
              value={formData.yearOfStudy}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Mobile + Timing */}
          <div className="form-row">
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <select
              name="timing"
              value={formData.timing}
              onChange={handleChange}
              required
            >
              <option value="">Select Timing</option>
              <option value="part-time">Part-time</option>
              <option value="full-time">Full-time</option>
            </select>
          </div>

          {/* In/Out Time */}
          <div className="form-row">
            <div>
              <label>In Time</label>
              <input
                type="time"
                name="inTime"
                value={formData.inTime}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Out Time</label>
              <input
                type="time"
                name="outTime"
                value={formData.outTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Certificate Upload */}
          <label>Sample Certificate Upload</label>
          <input type="file" name="sampleCertificate" onChange={handleChange} />

          {/* Area of Interest */}
          <input
            type="text"
            name="areaOfInterest"
            placeholder="Area of Interest"
            value={formData.areaOfInterest}
            onChange={handleChange}
            required
          />

          {/* Payment Options */}
          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="paymentOption"
                value="pay-now"
                checked={formData.paymentOption === "pay-now"}
                onChange={handleChange}
                required
              />
              Pay Now
            </label>
            <label>
              <input
                type="radio"
                name="paymentOption"
                value="pay-later"
                checked={formData.paymentOption === "pay-later"}
                onChange={handleChange}
              />
              Pay Later
            </label>
          </div>

          {/* Submit */}
          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default InternshipApply;

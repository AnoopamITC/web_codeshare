import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Internship.css";

const Internship = () => {
  const [internships, setInternships] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchInternships();
  }, []);

  const fetchInternships = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/admin/get-internships/");
      setInternships(res.data.internships);
    } catch (err) {
      console.error("Error fetching internships", err);
    }
  };

  return (
    <div className="internship-home">
      <h1 className="page-header">Internship Programs</h1>

      <div className="internship-grid">
        {internships.length > 0 ? (
          internships.map((item) => (
            <div key={item.id} className="internship-card">
              {item.image ? (
                <img
                  src={`http://127.0.0.1:8000${item.image}`}
                  alt={item.title}
                  className="internship-img"
                />
              ) : (
                <img
                  src="https://via.placeholder.com/400x200?text=Internship"
                  alt="default"
                  className="internship-img"
                />
              )}
              <div className="internship-content">
                <h3>{item.title}</h3>
                <p className="desc">{item.description}</p>
                <p>
                  <strong>Duration:</strong> {item.duration}
                </p>
                <p>
                  <strong>Fees:</strong> ₹{item.fees}
                </p>
                <p>
                  <strong>Eligibility:</strong> {item.eligibility}
                </p>
                <p>
                  <strong>Mode:</strong> {item.mode}
                </p>
                <p className={`status ${item.status ? "active" : "inactive"}`}>
                  {item.status ? "Active" : "Inactive"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No internships available</p>
        )}
      </div>
       <button
                  className="apply-btn"
                  onClick={() => navigate("/internshipapply")}
                >
                  Apply Now
                </button>
    </div>
  );
};

export default Internship;

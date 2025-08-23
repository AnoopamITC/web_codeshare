import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';import axios from "axios";
import "./addinternship.css";


const Internshipreport = () => {
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/user/applications/");
        setApplications(res.data.applications);
      } catch (err) {
        console.error("Error fetching applications", err);
      }
    };
    fetchApplications();
  }, []);

  return (
     <div className="admin-container">
      <h2>Student Internship Applications</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Duration</th>
            <th>Internship Type</th>
            <th>Payment Status</th>
            <th>Approved</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.name}</td>
              <td>{app.date}</td>
              <td>{app.duration}</td>
              <td>{app.internshipType}</td>
              <td>{app.paymentStatus}</td>
              <td>
                <button
                  className="approve-btn"
                  onClick={() => navigate(`/admin/applications/${app.id}`)}
                >
                  {app.approved ? "View" : "Approve"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Internshipreport

import React from "react";
import './Dashboard.css'
import {
  FaUsers,
  FaBook,
  FaDollarSign,
  FaChartLine,
  FaClipboardList,
  FaClock,
  FaFileAlt,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const chartData = [
    { month: "Jan", value: 400 },
    { month: "Feb", value: 300 },
    { month: "Mar", value: 500 },
    { month: "Apr", value: 450 },
    { month: "May", value: 600 },
    { month: "Jun", value: 700 },
  ];

  return (
    <>
      <div className="adm-dashboard-container">
        <h1>ITC DASHBOARD</h1>
        {/* Stats Cards */}
        <div className="adm-cards-section">
          <div className="adm-card">
            <FaUsers className="adm-card-icon adm-users" />
            <div className="adm-card-text">
              <h3>1,250</h3>
              <p>Total Users</p>
            </div>
          </div>
          <div className="adm-card">
            <FaBook className="adm-card-icon adm-courses" />
            <div className="adm-card-text">
              <h3>320</h3>
              <p>Courses</p>
            </div>
          </div>
          <div className="adm-card">
            <FaDollarSign className="adm-card-icon adm-revenue" />
            <div className="adm-card-text">
              <h3>5</h3>
              <p>Internship</p>
            </div>
          </div>
          <div className="adm-card">
            <FaChartLine className="adm-card-icon adm-growth" />
            <div className="adm-card-text">
              <h3>12%</h3>
              <p>Growth</p>
            </div>
          </div>
          <div className="adm-card">
            <FaClipboardList className="adm-card-icon adm-tasks" />
            <div className="adm-card-text">
              <h3>85</h3>
              <p>Tasks</p>
            </div>
          </div>
          <div className="adm-card">
            <FaFileAlt className="adm-card-icon adm-content" />
            <div className="adm-card-text">
              <h3>54</h3>
              <p>Articles</p>
            </div>
          </div>
        </div>

        {/* Chart + Recent Activity */}
        <div className="adm-main-grid">
          {/* Chart */}
          <div className="adm-chart-card">
            <h3>Monthly Performance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#2563eb"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Activity */}
          <div className="adm-activity-card">
            <h3>Recent Activity</h3>
            <ul className="adm-activity-list">
              <li>
                <FaClock className="adm-activity-icon" />
                <span>
                  User <b>Jane</b> enrolled in <b>React Basics</b>
                </span>
              </li>
              <li>
                <FaClock className="adm-activity-icon" />
                <span>Course <b>Node.js Advanced</b> was added</span>
              </li>
              <li>
                <FaClock className="adm-activity-icon" />
                <span>
                  <b>Mark</b> completed <b>JavaScript Essentials</b>
                </span>
              </li>
              <li>
                <FaClock className="adm-activity-icon" />
                <span>New <b>admin</b> registered</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

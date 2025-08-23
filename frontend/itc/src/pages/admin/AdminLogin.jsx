import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirection
import Swal from "sweetalert2";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Dummy login validation (replace with API call)
    if (formData.username === "admin" && formData.password === "1234") {
      Swal.fire({
        title: "Login Successful 🎉",
        text: "Welcome back, Admin!",
        icon: "success",
        confirmButtonColor: "#2563eb",
      }).then(() => {
        navigate("/dashboard"); // Redirect to dashboard
      });
    } else {
      Swal.fire({
        title: "Login Failed ❌",
        text: "Invalid username or password",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        {/* Logo / Title */}
        <h2 className="login-title">🔒 Admin Portal</h2>
        <p className="login-subtitle">Sign in to manage your dashboard</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="login-footer">
          Forgot password? <span className="reset-link">Reset here</span>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;

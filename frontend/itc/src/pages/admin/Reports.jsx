import React from "react";

// Icon SVGs for demonstration, you can use an icon library or import SVGs
const icons = {
  progress: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="#338cff">
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V5h14v14z"></path>
      <path d="M9 9h6v2H9zm0 4h4v2H9z"></path>
    </svg>
  ),
  analytics: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="#19c661">
      <path d="M3 13h4v8H3zM9 8h4v13H9zM15 3h4v18h-4z"></path>
    </svg>
  ),
  financial: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="#f5a623">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"></path>
      <path d="M7 10h10v2H7zm0 4h6v2H7z"></path>
    </svg>
  ),
  monthly: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="#111">
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm0 16H5V9h14v11zm0-13H5V6h14v1z"></path>
    </svg>
  ),
  activity: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="#d32f2f">
      <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
    </svg>
  ),
  usage: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="#111">
      <path d="M3 13h4v8H3zM9 8h4v13H9zM15 3h4v18h-4z"></path>
    </svg>
  ),
};

const reports = [
  { title: "Student Progress Report", subtitle: "Detailed progress tracking", icon: icons.progress, color: "#338cff" },
  { title: "Course Analytics", subtitle: "Course performance metrics", icon: icons.analytics, color: "#19c661" },
  { title: "Financial Report", subtitle: "Revenue and enrollment data", icon: icons.financial, color: "#f5a623" },
  { title: "Monthly Summary", subtitle: "Monthly activity overview", icon: icons.monthly, color: "#111" },
  { title: "User Activity Report", subtitle: "User engagement statistics", icon: icons.activity, color: "#d32f2f" },
  { title: "System Usage Report", subtitle: "Platform usage analytics", icon: icons.usage, color: "#111" },
];

const Reports = () => {
  return (
    <div className="reports-container">
      <h1 className="reports-header" style={{ marginTop: '55px', fontWeight: 'bold'}}>Reports Dashboard</h1>
      <div className="reports-grid">
        {reports.map((report, idx) => (
          <div className="report-card" key={idx}>
            <div className="report-icon">{report.icon}</div>
            <div className="report-content">
              <div className="report-title">{report.title}</div>
              <div className="report-subtitle">{report.subtitle}</div>
            </div>
            <button className="generate-btn">
              <span style={{ marginRight: 8 }}>
                <svg height="20" width="20" fill="#fff" viewBox="0 0 20 20">
                  <path d="M13 6v7H7V6h6zm3-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM4 4h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                </svg>
              </span>
              Generate Report
            </button>
          </div>
        ))}
      </div>

      <style>{`
        .reports-container {
          margin: 0 auto;
          padding: 32px 20px;
          font-family: 'Arial', sans-serif;
        }

        .reports-header {
          margin-bottom: 28px;
          color: #111;
        }

        .reports-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .report-card {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.07);
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: all 0.3s ease;
        }
        .report-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.12);
        }

        .report-icon {
          margin-bottom: 16px;
        }

        .report-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #222;
          margin-bottom: 6px;
        }

        .report-subtitle {
          font-size: 1rem;
          color: #666;
          margin-bottom: 20px;
        }

        .generate-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 12px 0;
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(90deg,#338cff,#2274dc);
          border: none;
          border-radius: 10px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(51,140,255,0.2);
          transition: all 0.3s ease;
        }
        .generate-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(51,140,255,0.3);
        }

        @media (max-width: 900px) {
          .reports-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 18px;
          }
        }

        @media (max-width: 580px) {
          .reports-grid {
            grid-template-columns: 1fr;
          }
          .reports-container {
            padding: 16px 10px;
          }
          .report-card {
            padding: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default Reports;

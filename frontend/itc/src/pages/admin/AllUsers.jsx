import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const users = [
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Johnson",
    id: "#e7dd854f",
    email: "sarah.johnson@email.com",
    role: "Student",
    courses: 3,
    status: "Active",
    joined: "12/15/2023",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Michael Chen",
    id: "#0c53a38a",
    email: "michael.chen@email.com",
    role: "Instructor",
    courses: 2,
    status: "Active",
    joined: "11/22/2023",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    name: "Emily Rodriguez",
    id: "#374126e3",
    email: "emily.rodriguez@email.com",
    role: "Student",
    courses: 5,
    status: "Pending",
    joined: "12/18/2023",
  },
];

const AllUsers = () => {
  return (
    <div className="user-management-container">
      <div className="user-header">
        <div>
          <h1 style={{ marginTop: '55px', fontWeight: 'bold '}}>User Management</h1>
          <p>Manage student accounts and administrator access</p>
        </div>
        <button className="cm-add-btn">+ Add New User</button>
      </div>

      <div className="user-filters">
        <input type="text" placeholder="Search users..." className="search-input" />
        <select className="role-select">
          <option value="">All Roles</option>
          <option value="Student">Student</option>
          <option value="Instructor">Instructor</option>
        </select>
        <button className="filter-btn">Filter</button>
        <select className="export-btn">
          <option value="">Export</option>
          <option value="CSV">CSV</option>
          <option value="Excel">Excel</option>
        </select>
      </div>

      <div className="user-table-wrapper">
        <table className="user-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Courses</th>
              <th>Status</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, idx) => (
              <tr key={idx}>
                <td>
                  <div className="user-info">
                    <img src={u.avatar} alt={u.name} className="user-avatar" />
                    <div>
                      <div className="user-name">{u.name}</div>
                      <div className="user-id">{u.id}</div>
                    </div>
                  </div>
                </td>
                <td>{u.email}</td>
                <td>
                  <span className="user-role">{u.role}</span>
                </td>
                <td>{u.courses}</td>
                <td>
                  <span className={u.status === "Active" ? "status-active" : "status-pending"}>
                    {u.status}
                  </span>
                </td>
                <td>{u.joined}</td>
                <td className="actions" data-label="Actions">
                    <button className="edit-btn" title="Edit">
                        <FiEdit size={20} color="#338cff" />
                    </button>
                    <button className="delete-btn" title="Delete">
                        <FiTrash2 size={20} color="#c83a23" />
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="user-pagination">
          <span>Showing 1 to 3 of 3 users</span>
          <div className="pagination-buttons">
            <button>{'< Previous'}</button>
            <span className="page-active">1</span>
            <button>{'Next >'}</button>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default AllUsers;

import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTasks,
  FaFolderOpen,
  FaClipboardList,
  FaUsers,
  FaCog,
} from "react-icons/fa";

const Team = () => {
  const baseClasses = "flex items-center p-3 rounded-lg !no-underline";
  const activeClasses = "bg-blue-600 text-white";
  const defaultClasses = "hover:bg-gray-100 text-gray-700";

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 min-h-screen bg-white shadow-md p-4 flex flex-col">
        <h2 className="text-2xl font-bold mb-8 pb-5">Brand_Name</h2>
        <nav className="space-y-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : defaultClasses}`
            }
          >
            <FaTasks className="mr-3" /> Dashboard
          </NavLink>
          <NavLink
            to="/completed"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : defaultClasses}`
            }
          >
            <FaFolderOpen className="mr-3" /> Projects
          </NavLink>
          <NavLink
            to="/todo"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : defaultClasses}`
            }
          >
            <FaClipboardList className="mr-3" /> To Do
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : defaultClasses}`
            }
          >
            <FaUsers className="mr-3" /> Team
          </NavLink>
        </nav>
        
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="flex justify-between items-center p-4 bg-white shadow-md w-full">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded-lg w-1/3"
          />
          <div className="w-10 h-10 bg-indigo-800 text-white flex items-center justify-center rounded-full">
            C
          </div>
        </header>

        {/* Team Members Section */}
        <main className="p-6 bg-gray-100 overflow-hidden">
          <div className="flex justify-between mb-6">
            <h3 className="text-xl font-semibold">Team Members</h3>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              + Add New User
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-3 text-left">Full Name</th>
                  <th className="p-3 text-left">Title</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Active</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "New User",
                    title: "Designer",
                    email: "user.email.com",
                    role: "Developer",
                  },
                  {
                    name: "Emily Wilson",
                    title: "Data Analyst",
                    email: "user.email.com",
                    role: "Analyst",
                  },
                  {
                    name: "Alex Johnson",
                    title: "UX Designer",
                    email: "user.email.com",
                    role: "Designer",
                  },
                  {
                    name: "Jane Smith",
                    title: "Product Manager",
                    email: "user.email.com",
                    role: "Manager",
                  },
                  {
                    name: "Codewave Asante",
                    title: "Administrator",
                    email: "user.email.com",
                    role: "Admin",
                  },
                ].map((user, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3 flex items-center">
                      <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      {user.name}
                    </td>
                    <td className="p-3">{user.title}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.role}</td>
                    <td className="p-3">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg">
                        Active
                      </span>
                    </td>
                    <td className="p-3">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                        Edit
                      </button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded ml-2 hover:bg-red-600">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Team;

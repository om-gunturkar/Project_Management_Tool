import React from "react";
import { NavLink } from "react-router-dom";
import Dashboard from "./Dashboard";
import To_Do from "./To_Do";
import Team from "./Team";

import {
  FaTasks,
  FaCheckCircle,
  FaSpinner,
  FaFolderOpen,
  FaClipboardList,
  FaUsers,
  FaCog,
} from "react-icons/fa";

const Completed = () => {
  const tasks = [
    {
      title: "Test task",
      priority: "High",
      team: ["CA", "JS", "AJ"],
      createdAt: "a year ago",
      status: "To Do",
    },
    {
      title: "Review Code Changes",
      priority: "Medium",
      team: ["AJ", "EW"],
      createdAt: "a year ago",
      status: "In Progress",
    },
    {
      title: "Website Proposal",
      priority: "Normal",
      team: ["CA", "JD", "JS"],
      createdAt: "a year ago",
      status: "Completed",
    },
  ];
  const baseClasses = "flex items-center p-3 rounded-lg !no-underline";
  const activeClasses = "bg-blue-600 text-white";
  const defaultClasses = "hover:bg-gray-100 text-gray-700";
  return (
    <div className="flex h-screen">
        
      {/* Sidebar */}
      <div className="w-64 min-h-screen bg-white shadow-md p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-8 pb-5">Brand_Name</h2>
      <nav className="space-y-2">
        <NavLink to="/dashboard" className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : defaultClasses}`}>
          <FaTasks className="mr-3" /> Dashboard
        </NavLink>
        <NavLink to="/completed" className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : defaultClasses}`}>
        <FaFolderOpen className="mr-3" /> Projects
        </NavLink>
        
        <NavLink to="/todo" className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : defaultClasses}`}>
          <FaClipboardList className="mr-3" /> To Do
        </NavLink>
        <NavLink to="/team" className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : defaultClasses}`}>
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
            placeholder="Search tasks..."
            className="p-2 border rounded-lg w-1/3"
          />
          <div className="w-10 h-10 bg-indigo-800 text-white flex items-center justify-center rounded-full">
            O
          </div>
        </header>

        {/* Project Board */}
        <main className="p-6 bg-gray-100 overflow-hidden">
          <h3 className="text-xl font-semibold mb-6">Project Management</h3>
          <div className="grid grid-cols-3 gap-6">
            <TaskColumn
              title="To Do"
              tasks={tasks.filter((task) => task.status === "To Do")}
            />
            <TaskColumn
              title="In Progress"
              tasks={tasks.filter((task) => task.status === "In Progress")}
            />
            <TaskColumn
              title="Completed"
              tasks={tasks.filter((task) => task.status === "Completed")}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

// Project Column Component
const TaskColumn = ({ title, tasks }) => (
  <div className="bg-white p-4 shadow-md rounded-lg">
    <h4 className="text-lg font-semibold mb-4">{title}</h4>
    <div className="space-y-4">
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div
            key={index}
            className="p-3 border rounded-lg shadow-sm bg-gray-50"
          >
            <h5 className="text-md font-semibold">{task.title}</h5>
            <p className="text-sm text-gray-600">Priority: {task.priority}</p>
            <p className="text-sm text-gray-600">
              Team: {task.team.join(", ")}
            </p>
            <p className="text-xs text-gray-400">Created: {task.createdAt}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No tasks in this category.</p>
      )}
    </div>
  </div>
);

export default Completed;

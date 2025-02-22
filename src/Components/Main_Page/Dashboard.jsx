import React from "react";
import Completed from "./Completed";
import { NavLink } from "react-router-dom";
import To_Do from "./To_Do";
import Team from "./Team";



import {
  FaTasks,
  FaCheckCircle,
  FaSpinner,
  FaClipboardList,
  FaFolderOpen,
  FaUsers,
  FaCog,
} from "react-icons/fa";

const Dashboard = () => {
  const tasks = [
    { title: "Test task", priority: "High", team: ["CA", "JS", "AJ"], createdAt: "a year ago" },
    { title: "Review Code Changes", priority: "Medium", team: ["AJ", "EW"], createdAt: "a year ago" },
    { title: "Website Proposal", priority: "Normal", team: ["CA", "JD", "JS"], createdAt: "a year ago" },
  ];

  const users = [
    { name: "New User", role: "Developer", status: "Active", createdAt: "a year ago" },
    { name: "Emily Wilson", role: "Analyst", status: "Active", createdAt: "a year ago" },
    { name: "Alex Johnson", role: "Designer", status: "Active", createdAt: "a year ago" },
  ];
  const baseClasses = "flex items-center p-3 rounded-lg !no-underline";
  const activeClasses = "bg-blue-600 text-white"; // Active state
  const defaultClasses = "hover:bg-gray-100 text-gray-700"; // Default state
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
            placeholder="Search..."
            className="p-2 border rounded-lg w-1/3"
          />
          <div className="w-10 h-10 bg-indigo-800 text-white flex items-center justify-center rounded-full">
            O
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 bg-gray-100 overflow-hidden">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <Table title="Task List" data={tasks} />
            <Table title="User Status" data={users} />
          </div>
          <div className="grid grid-cols-4 gap-6">
            <SummaryCard title="Total Task" count={10} icon={<FaTasks />} color="bg-blue-500" />
            <SummaryCard title="Completed Task" count={1} icon={<FaCheckCircle />} color="bg-green-500" />
            <SummaryCard title="Task In Progress" count={3} icon={<FaSpinner />} color="bg-yellow-500" />
            <SummaryCard title="Todos" count={6} icon={<FaClipboardList />} color="bg-pink-500" />
          </div>
        </main>
      </div>
    </div>
  );
};

// Summary Card Component
const SummaryCard = ({ title, count, icon, color }) => (
  <div className="p-4 bg-white shadow-md rounded-lg flex items-center space-x-4">
    <div className={`w-12 h-12 flex items-center justify-center text-white rounded-full ${color}`}>
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-2xl font-bold">{count}</p>
    </div>
  </div>
);

// Table Component
const Table = ({ title, data }) => (
  <div className="bg-white p-4 shadow-md rounded-lg w-full">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b">
          {Object.keys(data[0]).map((key) => (
            <th key={key} className="p-2 text-left capitalize">{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="border-b">
            {Object.values(item).map((value, i) => (
              <td key={i} className="p-2">{Array.isArray(value) ? value.join(", ") : value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Dashboard;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Dashboard from "./Dashboard";
import Completed from "./Completed";
import Team from "./Team";
import {
  FaTasks,
  FaFolderOpen,
  FaClipboardList,
  FaUsers,
  FaCog,
} from "react-icons/fa";

const To_Do = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Finish project report", completed: false },
    { id: 2, title: "Review pull requests", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  // Add new task
  const addTask = () => {
    if (newTask.trim() === "") return;
    const task = { id: Date.now(), title: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 min-h-screen bg-white shadow-md p-4 flex flex-col">
        <h2 className="text-2xl font-bold mb-8 pb-5">Brand_Name</h2>
        <nav className="space-y-2">
          <NavLink to="/dashboard" className="flex items-center p-3 rounded-lg hover:bg-gray-100 !no-underline">
            <FaTasks className="mr-3" /> Dashboard
          </NavLink>
          <NavLink to="/completed" className="flex items-center p-3 rounded-lg hover:bg-gray-100 !no-underline">
            <FaFolderOpen className="mr-3" /> Projects
          </NavLink>
          <NavLink to="/todo" className="flex items-center p-3 rounded-lg  bg-blue-600 text-white !no-underline">
            <FaClipboardList className="mr-3" /> To Do
          </NavLink>
          <NavLink to="/team" className="flex items-center p-3 rounded-lg hover:bg-gray-100 !no-underline">
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

        {/* To-Do List Section */}
        <main className="p-6 bg-gray-100 overflow-hidden">
          <h3 className="text-xl font-semibold mb-9 pb-5 text-center underline">To-Do List</h3>

          {/* Add Task Input */}
          <div className="w-full max-w-2xl mx-auto">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                placeholder="Enter a new task..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="p-3 border rounded-lg w-full bg-white shadow-sm h-14"
              />
              <button
                onClick={addTask}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg h-14"
              >
                Add
              </button>
            </div>

            {/* Task List */}
            <div className="mt-4 space-y-3">
              {tasks.map((task) => (
                <div key={task.id} className="p-3 border rounded-lg bg-white shadow-sm h-14 flex items-center justify-between">
                  <span className={task.completed ? "line-through text-gray-500" : ""}>
                    {task.title}
                  </span>
                  <div>
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`px-3 py-1 rounded-lg ${task.completed ? "bg-gray-500" : "bg-green-500"} text-white`}
                    >
                      {task.completed ? "Undo" : "Complete"}
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg ml-2"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default To_Do;

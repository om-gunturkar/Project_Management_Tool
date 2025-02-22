import React from "react";
import WorkflowImage from "../../Assets/Workflow.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100 text-gray-900 overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <div className="text-2xl font-bold">Brand_Name</div>
        <Link
          to="/login"
          className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-800 !no-underline"
        >
          Login/Signup
        </Link>
      </header>

      {/* Main Content */}
      <section className="flex flex-col md:flex-row items-center justify-center flex-grow p-8">
        <div className="max-w-2xl text-center md:text-left space-y-6">
          <h1 className="text-7xl font-bold text-gray-800">
            Your Complete Project Management Solution
          </h1>
          <h2 className="text-3xl text-gray-600">
            Manage Projects Smarter. Deliver Faster.
          </h2>
          <ul className="space-y-3 text-xl text-gray-700">
            <li>✅ Streamlined Task & Project Management</li>
            <li>✅ Flexible Views for Every Workflow</li>
            <li>✅ Work Smarter with Automation & Insights</li>
            <li>✅ Seamless Collaboration for Teams of Any Size</li>
          </ul>
        </div>
        <div className="mt-8 md:mt-0 md:ml-12 flex-shrink-0">
          <img
            src={WorkflowImage}
            alt="Project Management"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-4 bg-white shadow-md">
        <p className="text-lg italic">"Where Teams Plan, Track, and Succeed."</p>
        <p className="text-sm text-gray-500">© 2025 Om Gunturkar. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

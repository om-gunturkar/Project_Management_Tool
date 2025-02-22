import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleBackToLanding = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white font-poppins p-6 relative">
      <button
        className="absolute top-5 left-5 px-4 py-2 bg-indigo-600 text-white font-bold rounded shadow-md hover:opacity-90 hover:scale-105 hover:bg-indigo-800 hover:text-white transition-transform"

        onClick={handleBackToLanding}
      >
        Landing Page
      </button>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-black">
        <h2 className="text-2xl font-semibold text-center mb-6 underline">Welcome Back!</h2>
        <p className="text-2xl font-semibold text-center mb-6">Enter your details to login</p>
        <form onSubmit={() => navigate("/dashboard")} className="w-full">
          <div className="mb-4">
            <label htmlFor="username" className="block text-black font-semibold mb-2">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 border-2 border-black rounded-lg bg-gray-200 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-black font-semibold mb-2">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border-2 border-black rounded-lg bg-gray-200 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded font-medium transition-transform transform hover:scale-105 hover:bg-indigo-800 hover:text-white"
          >
            Login
          </button>
          {error && <div className="text-red-300 text-center mt-3">{error}</div>}
        </form>
        <div className="flex items-center my-4 w-full">
          <hr className="flex-grow border-t-2 border-black" />
          <span className="px-2 text-black">Or</span>
          <hr className="flex-grow border-t-2 border-black" />
        </div>
        <p className="text-black text-center">
          Don't have an account?{' '}
          <button
           className="ml-1 text-blue-600 font-bold hover:underline" 
            onClick={() => navigate("/signup")}
          >
            Signup
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
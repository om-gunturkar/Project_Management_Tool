import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add signup logic here
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-100 to-white px-4">
            <button 
                className="absolute top-5 left-5 px-4 py-2 bg-indigo-600 text-white font-bold rounded shadow-md hover:opacity-90 hover:scale-105 hover:bg-indigo-800 hover:text-white transition-transform"

                onClick={() => navigate('/')}
            >
                Back to Landing Page
            </button>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-black">
                <h2 className="text-2xl font-semibold text-center mb-6">Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block mb-2 font-medium">Username:</label>
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
                        <label htmlFor="email" className="block mb-2 font-medium">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border-2 border-black rounded-lg bg-gray-200 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 font-medium">Password:</label>
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
                        Signup
                    </button>
                    {error && <div className="text-red-500 text-center mt-4">{error}</div>}
                </form>
                <p className="text-center mt-4">Already have an account? 
                    <button 
                        className="ml-1 text-blue-600 font-bold hover:underline"
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add signup logic here
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-100 to-white px-4">
            <button 
                className="absolute top-5 left-5 px-4 py-2 bg-indigo-600 text-white font-bold rounded shadow-md hover:opacity-90 hover:scale-105 hover:bg-indigo-800 hover:text-white transition-transform"

                onClick={() => navigate('/')}
            >
                Back to Landing Page
            </button>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-black">
                <h2 className="text-2xl font-semibold text-center mb-6">Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block mb-2 font-medium">Username:</label>
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
                        <label htmlFor="email" className="block mb-2 font-medium">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border-2 border-black rounded-lg bg-gray-200 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 font-medium">Password:</label>
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
                        Signup
                    </button>
                    {error && <div className="text-red-500 text-center mt-4">{error}</div>}
                </form>
                <p className="text-center mt-4">Already have an account? 
                    <button 
                        className="ml-1 text-blue-600 font-bold hover:underline"
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;

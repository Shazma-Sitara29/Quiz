import React, { useState } from 'react';

function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you would normally verify username and password
    if (username && password) {
      setUser(username);
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-purple-700">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-extrabold text-center text-purple-800 mb-6">Welcome to the Quiz App</h2>
        <p className="text-center text-purple-600 mb-4">Please log in to start your quiz journey!</p>

        {/* Username Field */}
        <input
          type="text"
          className="w-full p-3 mb-4 border-2 border-purple-500 rounded-lg"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Password Field */}
        <input
          type="password"
          className="w-full p-3 mb-4 border-2 border-purple-500 rounded-lg"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-all duration-200"
        >
          Log In
        </button>
      </div>
    </div>
  );
}

export default Login;

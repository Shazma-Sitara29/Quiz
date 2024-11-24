import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons for show/hide

function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!/^[A-Za-z]+$/.test(username)) {
      setError('Username must contain only alphabets.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    setError(''); // Clear any previous errors
    setUser(username);
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center px-4"
      style={{
        backgroundImage: "url('https://img.pikbest.com/wp/202408/program-code-3d-rendering-of-abstract-purple-coding-background-with-mock-up-and-big-data-illuminating-the-concept-programming_9762612.jpg!w700wp')",
      }}
    >
      <div className="bg-white p-12 rounded-lg shadow-2xl w-full max-w-lg backdrop-blur-md bg-opacity-90">
        <h2 className="text-3xl font-extrabold text-center text-purple-800 mb-6">Welcome to the Quiz App</h2>
        <p className="text-center text-purple-600 mb-6">Please log in to start your quiz journey!</p>

        {/* Error Message */}
        {error && (
          <p className="text-red-600 text-sm text-center mb-4 font-medium">{error}</p>
        )}

        {/* Username Field */}
        <input
          type="text"
          className="w-full p-4 mb-4 border-2 border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400 text-gray-900"
          placeholder="Enter your username (only alphabets)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Password Field */}
        <div className="relative mb-4">
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-full p-4 border-2 border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400 text-gray-900"
            placeholder="Enter your password (min 6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Toggle Password Visibility */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-4 flex items-center text-purple-500"
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-all duration-200"
        >
          Log In
        </button>
      </div>
    </div>
  );
}

export default Login;

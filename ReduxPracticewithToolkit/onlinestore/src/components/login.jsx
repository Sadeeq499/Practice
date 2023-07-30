import React, { useState } from "react";
// Import react icons for social media options
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

function LoginPage() {
  // State variables for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add your logic for authentication here
    alert(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Log in</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Log in
            </button>
          </div>
        </form>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">Or sign in with</span>
          <div className="flex space-x-2">
            {/* Use react icons for social media options */}
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-500">
              <FaTwitter />
            </a>
            <a href="#" className="text-red-500 hover:text-red-600">
              <FaGooglePlusG />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

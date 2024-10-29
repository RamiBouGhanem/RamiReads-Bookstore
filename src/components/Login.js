import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const loginButtonClicked = (e) => {
    navigate("/homepage");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black to-gray-800">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-2xl shadow-2xl transform transition-all hover:scale-105 duration-300">
        {/* Logo or Title */}
        <h2 className="text-3xl font-semibold text-center text-white tracking-wider">
          Welcome to <span className="text-blue-400">Rami</span>
          <span className="text-blue-600 font-bold tracking-tight">Reads</span>
        </h2>
        <p className="text-center text-gray-300 text-sm italic">
          “A room without books is like a body without a soul.”
        </p>

        {/* Form */}
        {/* Username Field */}
        <form onSubmit={loginButtonClicked} className="space-y-4">
          <div className="flex items-center border-b-2 border-gray-600 p-2 focus-within:border-blue-500 transition-colors duration-300">
            <FontAwesomeIcon
              icon={faUser}
              className="text-gray-400 mr-2 hover:scale-110 transform transition-transform duration-200"
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 bg-gray-800 outline-none text-gray-300 placeholder-gray-500"
              required
            />
          </div>

          <div className="flex items-center border-b-2 border-gray-600 p-2 focus-within:border-blue-500 transition-colors duration-300">
            <FontAwesomeIcon
              icon={faLock}
              className="text-gray-400 mr-2 hover:scale-110 transform transition-transform duration-200"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-gray-800 outline-none text-gray-300 placeholder-gray-500"
              required
            />
          </div>

          <div className="flex justify-between items-center text-gray-400">
            <label className="flex items-center">
              <input
                type="checkbox"
                // checked={rememberMe}
                // onChange={() => setRememberMe(!rememberMe)}
                className="mr-2 accent-blue-500"
              />
              <span className="text-sm">Remember Me</span>
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 text-white bg-blue-600 rounded-full hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            onClick={loginButtonClicked}
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-400 mt-6">
          New to RamiReads?{" "}
          <a href="#" className="text-blue-500 font-semibold hover:underline">
            Sign Up Now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

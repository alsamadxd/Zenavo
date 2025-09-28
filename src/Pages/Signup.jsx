

import { React, useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/Login"); // Navigate programmatically
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const checkPass = () => {
    if (!username.length) {
      setMessage("Enter a valid Email");
      return false;
    } else {
      if (password.length < 8) {
        setMessage("Password must contain atleast 8 character");
        return false;
      } else if (password !== confirmPassword) {
        setMessage("Passwords do not match");
        return false;
      } else {
        setMessage("successful");
        return true;
      }
    }
  };

  async function handleSignupClick() {
    const isValid = checkPass();

    if (!isValid) return;
    try {
      const response = await fetch(`${apiUrl}/api/signup`, {
        // const response = await fetch(
        //   "http://120.413.248.45:5000/api/signup",
        //   {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        // Read the raw error message
        throw new Error("Signup failed");
      }
      const data = await response.json(); // Now safe
      localStorage.setItem("token", data.token);
      navigate("/Login");
    } catch (err) {
      console.error("Signup error:", err.message);
      setMessage("Signup failed. Please try again.");
    }
  }

  return (
    <>
      {/* <Navbar /> */}

      <div className="md:max-w-[35rem] md:mx-auto text-2xl h-[80%] p-2 m-5 my-8 border-amber-600 border-4 rounded-3xl">
        <div className="my-5">
          <label className=" font-medium text-gray-700 m-2">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="E.g. johndoe"
            name="name"
            className="w-full m-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="my-5">
          <label className=" font-medium text-gray-700 m-2">
            Create Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            className="w-full m-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="my-5">
          <label className=" font-medium text-gray-700 m-3">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
            placeholder="Confirm Your Password"
            className="w-full m-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {message && (
            <div className="text-red-400 font-bold mx-2 text-xl">{message}</div>
          )}
        </div>
      </div>
      <button
        className="block mx-auto my-10 text-white font-bold bg-[#E65100] text-2xl px-8 py-3 rounded-full"
        onClick={handleSignupClick}
      >
        Sign-Up
      </button>
      <div className="text-lg text-center my-t-[-2]">
        Already have an Account ?
        <button
          className="inline-block mx-2 hover:scale-110 overflow-hidden text-white font-bold bg-[#E65100] text-lg px-4 py-1 rounded-full"
          onClick={handleLoginClick}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Signup;

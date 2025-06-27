import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Signup failed");
        return;
      }

      setMessage("Signup successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setMessage("An error occurred.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600 text-white px-4">
      <div className="bg-white text-black p-10 rounded-2xl shadow-2xl w-full max-w-md animate-fade-in">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-blue-800">
          Join SMART DHAN
        </h2>

        <p className="text-center mb-6 text-gray-600">
          Unlock your path to Financial Freedom.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Create Password"
            required
            className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-red-600 font-medium">{message}</p>
        )}

        <p className="text-center text-sm text-blue-700 mt-6 hover:underline cursor-pointer" onClick={() => navigate("/login")}>
          Already have an account? Login
        </p>
      </div>
    </div>
  );
};

export default Signup;

// On successful signup, the user is already redirected to the login page using:
// setTimeout(() => navigate("/login"), 2000);
// No additional code is needed here.
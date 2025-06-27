import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  // Replace this with actual username from auth context or props
  const username = "Paul";

  const handleExploreCapsules = () => {
    navigate('/capsules');
  };

  const handleLogout = () => {
    // clear tokens or auth data here if applicable
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white flex flex-col items-center justify-start p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome, {username} 👋</h1>

      <div className="bg-white text-black rounded-2xl shadow-lg p-6 w-full max-w-md mb-6">
        <h2 className="text-2xl font-semibold mb-2">📚 Learn Financial Literacy</h2>
        <p className="text-sm text-gray-600 mb-4">
          Access bite-sized capsules on mutual funds, savings, and investments.
        </p>
        <button
          onClick={handleExploreCapsules}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition"
        >
          Explore Capsules
        </button>
      </div>

      <button
        onClick={handleLogout}
        className="mt-auto bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

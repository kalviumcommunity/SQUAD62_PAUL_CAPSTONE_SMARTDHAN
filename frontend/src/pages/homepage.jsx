import React from 'react';
import CapsuleList from './CapsuleList';  
import Header from '../Components/Header'; 

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Header />

      <div className="flex flex-col items-center justify-start pt-24 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to SMART DHAN</h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
          Your simple financial awareness platform to learn how to save and invest smartly.
        </p>
        <CapsuleList />
      </div>
    </div>
  );
};

export default Homepage;

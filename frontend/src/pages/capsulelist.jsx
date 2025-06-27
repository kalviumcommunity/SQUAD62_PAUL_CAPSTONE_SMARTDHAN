import React from 'react';

const capsules = [
  {
    id: 1,
    title: 'Mutual Funds',
    description: 'Learn how Mutual Funds work.',
    image: 'https://cdn-icons-png.flaticon.com/512/2948/2948316.png',
  },
  {
    id: 2,
    title: 'Fixed Deposits (FDs)',
    description: 'Safe investment with fixed returns.',
    image: 'https://cdn-icons-png.flaticon.com/512/2331/2331998.png',
  },
  {
    id: 3,
    title: 'Public Provident Fund (PPF)',
    description: 'Long-term saving instrument.',
    image: 'https://cdn-icons-png.flaticon.com/512/1006/1006553.png',
  },
  {
    id: 4,
    title: 'Stocks Basics',
    description: 'Introduction to stock market investing.',
    image: 'https://cdn-icons-png.flaticon.com/512/2597/2597898.png',
  },
];

const CapsuleList = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">📘 Financial Capsules</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {capsules.map((capsule) => (
          <div key={capsule.id} className="bg-gray-100 p-4 rounded-xl shadow">
            <img src={capsule.image} alt={capsule.title} className="h-20 w-20 mb-3 mx-auto" />
            <h3 className="text-xl font-semibold text-center">{capsule.title}</h3>
            <p className="text-sm text-gray-700 text-center">{capsule.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CapsuleList;

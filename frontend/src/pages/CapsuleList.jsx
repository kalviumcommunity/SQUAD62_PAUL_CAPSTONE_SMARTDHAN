// frontend/src/pages/CapsuleList.jsx
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
    <div>
      <h2>Financial Capsules</h2>
      <ul>
        {capsules.map((capsule) => (
          <li key={capsule.id}>
            <img
              src={capsule.image}
              alt={capsule.title}
              className="capsule-image"
            />
            <h3>{capsule.title}</h3>
            <p>{capsule.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CapsuleList;

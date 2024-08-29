import React from 'react';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">GEN PET</h1>
      <div className="flex gap-4">
        <Link href="/pets">
          <a className="bg-blue-500 text-white px-4 py-2 rounded">View All Pets</a>
        </Link>
        <Link href="/data-entry">
          <a className="bg-green-500 text-white px-4 py-2 rounded">Add New Entry</a>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

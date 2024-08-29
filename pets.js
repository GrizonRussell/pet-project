// pages/pets.js
import React from 'react';

const Pets = () => {
  const petsData = [
    { owner: 'John Doe', petName: 'Buddy', species: 'Dog', breed: 'Labrador', dob: '2020-01-15' },
    { owner: 'Jane Smith', petName: 'Whiskers', species: 'Cat', breed: 'Siamese', dob: '2019-07-30' },
    // Add more data here or fetch from an API
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">All Pets</h1>
      <table className="min-w-full bg-white rounded shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b">Owner's Name</th>
            <th className="py-2 px-4 border-b">Pet Name</th>
            <th className="py-2 px-4 border-b">Species</th>
            <th className="py-2 px-4 border-b">Breed</th>
            <th className="py-2 px-4 border-b">Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {petsData.map((pet, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{pet.owner}</td>
              <td className="py-2 px-4 border-b">{pet.petName}</td>
              <td className="py-2 px-4 border-b">{pet.species}</td>
              <td className="py-2 px-4 border-b">{pet.breed}</td>
              <td className="py-2 px-4 border-b">{pet.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pets;

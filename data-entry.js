// pages/data-entry.js
import React, { useState } from 'react';

const DataEntry = () => {
  const [formData, setFormData] = useState({
    owner: '',
    petName: '',
    species: '',
    breed: '',
    dob: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Pet Entry</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="owner">Owner's Name</label>
          <input
            type="text"
            name="owner"
            id="owner"
            value={formData.owner}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="petName">Pet Name</label>
          <input
            type="text"
            name="petName"
            id="petName"
            value={formData.petName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="species">Species</label>
          <input
            type="text"
            name="species"
            id="species"
            value={formData.species}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="breed">Breed</label>
          <input
            type="text"
            name="breed"
            id="breed"
            value={formData.breed}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default DataEntry;

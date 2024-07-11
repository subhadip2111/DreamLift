import React from 'react';

const FilterModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex justify-end z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="relative w-96 h-full bg-white shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Filter Exams</h2>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Exam Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter exam name"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Percentage</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter percentage"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Year</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter year"
            />
          </div>
          <button
            onClick={onClose}
            className="mt-4 w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;

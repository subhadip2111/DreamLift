import React, { useState } from 'react';

// FilterButton Component
const FilterButton = ({ onClick }) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <label
        htmlFor="nav_bar_icon"
        className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center space-y-1.5"
        onClick={onClick}
      >
        <input id="nav_bar_icon" type="checkbox" className="hidden peer" />
        <div
          className="w-2/3 h-1.5 bg-purple-400 rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[-30deg] peer-checked:translate-y-[-5px]"
        ></div>
        <div
          className="w-full h-1.5 bg-purple-400 rounded-lg transition-all duration-300 origin-center peer-checked:rotate-90 peer-checked:translate-x-4"
        ></div>
        <div
          className="w-2/3 h-1.5 bg-purple-400 rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[30deg] peer-checked:translate-y-[5px]"
        ></div>
      </label>
    </div>
  );
};

// FilterModal Component
const FilterModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-end z-50">
      <div className="bg-white w-1/3 h-full p-4">
        <button onClick={onClose} className="mb-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
        <h2 className="text-xl font-bold mb-4">Filter Options</h2>
        {/* Add your filter options here */}
        <div className="space-y-4">
          <label>
            <input type="checkbox" className="mr-2" />
            Option 1
          </label>
          <label>
            <input type="checkbox" className="mr-2" />
            Option 2
          </label>
          <label>
            <input type="checkbox" className="mr-2" />
            Option 3
          </label>
        </div>
      </div>
    </div>
  );
};

// Main Component

"use client";

import Image from "next/image";
import React, { useState } from "react";

const SearchBar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
    console.log("button clicked ");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full flex flex-col items-center py-4 bg-[#0b2929]">
      <div className="flex w-full max-w-[1030px] px-4 items-center">
        <form className="flex-grow">
          <label
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            htmlFor="default-search"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
              >
                <path
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  stroke="currentColor"
                ></path>
              </svg>
            </div>
            <input
              required
              placeholder="Search"
              className="block w-full p-4 pl-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="default-search"
              type="search"
            />
            <button
              type="submit"
              className="absolute right-2.5 bottom-1/2 transform translate-y-1/2 p-4 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  stroke="currentColor"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </form>

        <button
          onClick={handleButtonClick}
          className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[4px] bg-black rounded-[16px] bg-gradient-to-t from-[#212121] to-[#212121] active:scale-95 ml-4"
        >
          <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
            <Image
              src="/filter.png"
              height={40}
              width={40}
              alt="Filter Icon"
              className=" rounded-lg"
            />
          </div>
          <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"></div>
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex justify-end z-50">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={handleCloseModal}
          ></div>
          <div className="relative w-96 h-full bg-white shadow-lg">
            <button
              onClick={handleCloseModal}
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
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Exam Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter exam name"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Percentage
                </label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter percentage"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Year
                </label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter year"
                />
              </div>
              <button
                onClick={handleCloseModal}
                className="mt-4 w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

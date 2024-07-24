"use client"
import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import TeacherCard from '@/components/teacherCard';
import Loader from '@/components/Loader';

// Custom debounce function
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const TeacherSearchBar = () => {
  const [teachers, setTeachers] = useState([]);
  const [input, setInput] = useState('');

  const fetchTeachers = async (keyword = null, limit = 10, offset = 0) => {
    try {
      const params = { limit, offset };
      if (keyword) params.keyword = keyword;

      const resp = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/teachers/query`, { params });
      setTeachers(resp.data); // Using resp.data directly for Axios
    } catch (error) {
      console.error("Error fetching teachers: ", error);
    }
  };

  // Debounced version of fetchTeachers
  const debouncedFetchTeachers = useCallback(debounce(fetchTeachers, 300), []);

  useEffect(() => {
    if (input.trim() !== '') {
      debouncedFetchTeachers(input);
    } else {
      fetchTeachers(); // Call with default parameters
      setTeachers([]);
    }
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
if(!teachers && teachers.length>0){
  return <Loader/>
}

  return (
    <div className='w-full flex flex-col items-center py-4'>
      <form className="form relative" onSubmit={handleSubmit}>
        <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
          <svg
            width="17"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search"
            className="w-5 h-5 text-gray-700"
          >
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              strokeWidth="1.333"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <input
          className="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
          placeholder="Search..."
          required=""
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="reset" className="absolute right-3 -translate-y-1/2 top-1/2 p-1" onClick={() => setInput('')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </form>
      {/* You can render the results here if needed */}
      <div className="flex flex-wrap gap-8 space-x-20 justify-center">
      {teachers.map((teacher, index) => (
        <TeacherCard key={index} teacher={teacher} />
      ))}
    </div>
    </div>
  );
};

export default TeacherSearchBar;

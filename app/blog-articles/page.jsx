"use client";
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {Skeleton} from "@nextui-org/skeleton";
const page = () => {
  const [blogs, setBlogs] = useState([]);

  async function fetchBlogs() {
    try {
      const res = await axios.get(`http://localhost:3000/api/blog`);
      if (res.data) {
        setBlogs(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  if(!blogs){
    // return <Skeleton/>

    return (
      <div className="max-w-[300px] w-full flex items-center gap-3">
        <div>
          <Skeleton className="flex rounded-full w-12 h-12"/>
        </div>  
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="h-3 w-3/5 rounded-lg"/>
          <Skeleton className="h-3 w-4/5 rounded-lg"/>
        </div>
      </div>
    );
  }
  return (



<div className='bg-gray-900 min-h-screen'>
  <div className="container mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold text-center mb-12 text-white">Blog Articles</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs?.map((blog) => (
        <div key={blog._id} className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2">
          <Link href={`/blog-articles/${blog._id}`}>
            <img src={blog?.image} alt={blog.title} className="w-full h-48 object-cover rounded-t-lg" />
          </Link>
          <div className="p-4">
            <h2 className="text-xl font-bold text-white">{blog.title}</h2>
            <p className="text-gray-400 text-sm">By {blog.author}</p>
            <p className="mt-2 text-gray-300">{blog.description}</p>
            <Link href={`/blog-articles/${blog._id}`}>
              <button className="mt-4 text-indigo-400 hover:underline">View More Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



















  );
};

export default page;

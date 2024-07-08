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
    return <Skeleton/>
  }
  return (
    <div className="container mx-auto py-12 px-4 bg-slate-800 ">
      <h1 className="text-3xl font-bold text-center mb-12">Blog Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs?.map((blog) => (
          <div key={blog._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link  href={`/blog-articles/${blog._id}`}>
            <img src={blog?.image} alt={blog.title} className="w-full h-48 object-cover" />
            </Link>
            <div className="p-4">
              <h2 className="text-xl font-bold">{blog.title}</h2>
              <p className="text-gray-600 text-sm">By {blog.author}</p>
              <p className="mt-2 text-gray-700">{blog.description}</p>

              <Link href={`/blog-articles/${blog._id}`}>
                <button className="mt-4 text-indigo-600 hover:underline">View More Details</button>
              </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

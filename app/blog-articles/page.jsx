
"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Skeleton } from "@nextui-org/skeleton";
import BlogCard from '@/components/BlogCard';
import Loader from '@/components/Loader';


const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchBlogs() {
  
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`);
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

  if (!blogs || blogs.length === 0) {
    return (
    <Loader/>
    );
  }


  return (
    <div className="bg-[#212121] min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-12 text-white">Blog Articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs?.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

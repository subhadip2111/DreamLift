"use client"

import Link from 'next/link';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Skeleton} from "@nextui-org/skeleton";
import Loader from '@/components/Loader';
import Image from 'next/image';
const page = ({params}) => {
 
  const  blogId =params.blogId
  const [blog,setBlog] = useState(null);


console.log(params.blogId);
  useEffect(() => {
    if (blogId) {
      fetchBlog();
    }
  }, [blogId]);

  const fetchBlog = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${blogId}`);
      if (res.data) {
        setBlog(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

if(!blog){
  return <Loader/>
}

  return (
    <>
           



<main>
  <article>
    <header class="mx-auto max-w-screen-xl pt-28 text-center">
      <p class="text-gray-500">Published April 4, 2022</p>
      <h1 class="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">{blog.title}</h1>
      <p class="mt-6 text-lg text-gray-700">You're doing marketing the wrong way</p>
      <div class="mt-6 flex flex-wrap justify-center gap-2" aria-label="Tags">
        <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">{blog.tags}</button>
        <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Branding</button>
        <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Digital</button>
        <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Identity</button>
      </div>
      <Image className="sm:h-[34rem] mt-10 w-full object-contain"  height={400} width={500} src= {blog?.image}alt="Featured Image" />
    </header>
    <div class="mx-auto mt-10 max-w-screen-md space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700">
      <strong class="text-2xl font-medium">
        </strong>
      
      <p>{blog?.description}</p>
    </div>
  </article>
</main>

    </>
  )
}

export default page



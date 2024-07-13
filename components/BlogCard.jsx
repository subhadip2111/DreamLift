import React from 'react';
import Link from 'next/link';

const BlogCard = ({ blog }) => {
  return (
    <div className="m-2 group px-10 py-5 bg-dark rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#eaec5c] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all">
      <Link href={`/blog-articles/${blog._id}`}>
        <img
          src={blog?.image}
          alt={blog.title}
          className="w-44 card1img aspect-square text-[#abd373] group-hover:bg-gray-800 text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto"
        />
      </Link>
      <p className="cardtxt font-semibold text-gray-200 tracking-wider group-hover:text-gray-700 text-xl">
        {blog.title}
      </p>
      <p className="blueberry font-semibold text-gray-600 text-xs">
        {blog.description}
      </p>
      <div className="ordernow flex flex-row justify-between items-center w-full">
        <p className="ordernow-text text-[#abd373] font-semibold group-hover:text-gray-800">
          By {blog.author}
        </p>
        <Link href={`/blog-articles/${blog._id}`}>
          <p className="btun4 lg:inline-flex items-center gap-3 group-hover:bg-white/10 bg-[#abd373] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn">
            View More Details
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

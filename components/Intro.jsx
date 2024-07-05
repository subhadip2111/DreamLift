
// "use client";
// import Image from 'next/image';
// import React from 'react';

// const Intro = () => {
//     return (
//         <div className=" h-800px mx-auto max-w-w-auto py-32 sm:py-48 lg:py-56 bg-yellow-100">
//           <Image src= "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={35} width={35} alt='any'/>
//             <div className="text-center">
//                 <h1 className="text-4xl font-bold tracking-tight text-blue-500 sm:text-6xl">
//                     Think Big, Get Big. Think Small, Get Small.
//                 </h1>
//                 <p className="mt-6 text-lg leading-8 text-rose-400">
//                     Your mindset shapes your reality. If you dream big and take bold steps, the possibilities are limitless. However, if you confine yourself to small thoughts and actions, you'll remain within the bounds of those limitations. Embrace the power of thinking big, and watch as your world expands in ways you never thought possible. Your potential is only as great as the size of your vision.
//                 </p>
//                 <div className="mt-10 flex items-center justify-center gap-x-6">
//                     <a
//                         href="/career-paths"
//                         className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-opacity duration-1000"
//                     >
//                         Get started
//                     </a>  
//                     <a
//                         href="/explore-careers"
//                         className="text-sm font-semibold leading-6 text-gray-900 transition-opacity duration-1000"
//                     >
//                         Learn more <span aria-hidden="true">→</span>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Intro;

"use client";
import Link from 'next/link';
import React from 'react';

const Intro = () => {
    return (
        <div className="h-800px mx-auto max-w-auto py-28 sm:py-48 lg:py-56 bg-yellow-100 relative">
            <div className="absolute inset-0 bg-cover bg-center h-full"
                 style={{ 
                     backgroundImage: 'url("https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' 
                 }}>
            </div>
           
           <div className="relative z-10 text-center text-gray-900">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                    Think Big, Get Big. Think Small, Get Small.
                </h1>
                <p className="mt-6 text-lg leading-8  ">
                    Your mindset shapes your reality. If you dream big and take bold steps, the possibilities are limitless. However, if you confine yourself to small thoughts and actions, you'll remain within the bounds of those limitations. Embrace the power of thinking big, and watch as your world expands in ways you never thought possible. Your potential is only as great as the size of your vision.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="/career-paths"
                        className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-opacity duration-1000"
                    >
                        Get started
                    </Link>  
                    <Link
                        href="/explore-careers"
                        className="text-sm  rounded-md font-semibold leading-6 text-yellow-100   hover:bg-black-400 transition-opacity duration-1000"
                    >
                        Learn more <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
         
        </div>
    );
};

export default Intro;

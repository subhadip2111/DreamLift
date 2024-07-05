"use client";

// export default function Footer() {
//   return (
//     <footer classNameName="bg-gray-900 text-gray-300">
//       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         <div className="md:flex md:justify-between">
//           <div className="space-y-6 md:space-y-0 md:flex md:items-center md:gap-12">
//             <div className="flex-shrink-0">
//               <a href="#">
//                 <span className="sr-only">Your Company</span>
//                 <img
//                   className="h-8 w-auto"
//                   src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                   alt=""
//                 />
//               </a>
//             </div>
//             <div className="flex space-x-6">
//               <a href="#" className="text-gray-300 hover:text-white">
//                 <span className="sr-only">Facebook</span>
//                 {/* Add your social media icons here */}
//                 <svg
//                   className="h-6 w-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M22.675 0h-21.35C.596 0 0 .596 0 1.326v21.348C0 23.405.596 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.505 0-1.797.715-1.797 1.764v2.31h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.325-.595 1.325-1.326V1.326C24 .596 23.405 0 22.675 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white">
//                 <span className="sr-only">Twitter</span>
//                 {/* Add your social media icons here */}
//                 <svg
//                   className="h-6 w-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.56-2.002.968-3.127 1.184-.896-.957-2.173-1.555-3.588-1.555-2.717 0-4.92 2.203-4.92 4.92 0 .39.043.765.127 1.124-4.087-.205-7.713-2.165-10.141-5.144-.424.723-.667 1.562-.667 2.457 0 1.696.866 3.192 2.188 4.069-.804-.026-1.56-.247-2.222-.616v.061c0 2.372 1.688 4.348 3.924 4.799-.41.111-.842.171-1.287.171-.315 0-.623-.03-.923-.086.624 1.952 2.433 3.376 4.576 3.417-1.68 1.319-3.809 2.107-6.102 2.107-.396 0-.788-.023-1.174-.067 2.179 1.394 4.768 2.209 7.548 2.209 9.053 0 14.009-7.496 14.009-13.986 0-.213-.004-.425-.014-.637.961-.695 1.796-1.562 2.457-2.549z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white">
//                 <span className="sr-only">LinkedIn</span>
//                 {/* Add your social media icons here */}
//                 <svg
//                   className="h-6 w-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M21.5 0h-19C1.119 0 0 1.119 0 2.5v19C0 22.881 1.119 24 2.5 24h19c1.381 0 2.5-1.119 2.5-2.5v-19C24 1.119 22.881 0 21.5 0zm-13 20.5h-3v-11h3v11zm-1.5-12.3c-.966 0-1.75-.784-1.75-1.75S6.034 4.7 7 4.7s1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm12 12.3h-3v-5.5c0-1.304-.021-2.978-1.814-2.978-1.814 0-2.094 1.417-2.094 2.883v5.595h-3v-11h2.874v1.504h.041c.399-.75 1.375-1.546 2.834-1.546 3.027 0 3.586 1.992 3.586 4.584v6.458z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//           <div className="mt-8 md:mt-0">
//             <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
//               <div>
//                 <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
//                 <ul className="mt-4 space-y-4">
//                   <li>
//                     <a href="#" className="text-base text-gray-300 hover:text-white">
//                       About Us
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-base text-gray-300 hover:text-white">
//                       Careers
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-base text-gray-300 hover:text-white">
//                       Press
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-base text-gray-300 hover:text-white">
//                       Blog
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
//                 <ul className="mt-4 space-y-4">
//                   <li>
//                     <a href="#" className="text-base text-gray-300 hover:text-white">
//                       Help Center
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-base text-gray-300 hover:text-white">
//                       Safety Center
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-base text-gray-300 hover:text-white">
//                       Community Guidelines
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
//                 <ul className="mt-4 space-y-4">
//                   <li>
//                     <a href="#" className="text-base text-gray-300 hover:text-white">
//                       Cookies Policy
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-base text-gray-300 hover:text-white">
//                       Privacy Policy
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-base text-gray-300 hover:text-white">
//                       Terms of Service
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-base text-gray-300 hover:text-white">
//                       Law Enforcement
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
//                 <ul className="mt-4 space-y-4">
//                   <li>
//                     <a href="#" className="text-base text-gray-300 hover:text-white">
//                       Pricing
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-base text-gray-300 hover:text-white">
//                       Documentation
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-base text-gray-300 hover:text-white">
//                       Guides
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-base text-gray-300 hover:text-white">
//                       API Status
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
//           <p className="text-base text-gray-400 md:order-1">&copy; 2024 Your Company, Inc. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// Footer component using Tailwind CSS
export default function Footer() {
    return (
     <>

<footer className="bg-blue-100/80 font-sans dark:bg-gray-900">
    <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
                <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Subscribe our newsletter to get an update.</h1>

                <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />
            
                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                        Subscribe
                    </button>
                </div>
            </div>

            <div>
                <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Home</p>
                    <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Who We Are</p>
                    <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Our Philosophy</p>
                </div>
            </div>

            <div>
                <p className="font-semibold text-gray-800 dark:text-white">Industries</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Retail & E-Commerce</p>
                    <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Information Technology</p>
                    <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Finance & Insurance</p>
                </div>
            </div>
        </div>
        
        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />
        
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-1 gap-4 hover:cursor-pointer">
                <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" height="110" alt="" />
                <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" height="110" alt="" />
            </div>
            
            <div className="flex gap-4 hover:cursor-pointer">
                <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                <img src="https://www.svgrepo.com/show/94698/github.svg" className="" width="30" height="30" alt="gt" />
                <img src="https://www.svgrepo.com/show/22037/path.svg" width="30" height="30" alt="pn" />
                <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                <img src="https://www.svgrepo.com/show/22048/dribbble.svg" className="" width="30" height="30" alt="db" />
            </div>
        </div>
        <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4">© 2024 You Company Inc. All rights reserved.</p>
    </div>
</footer>
     </>
    );
  }
  

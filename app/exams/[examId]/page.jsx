
// // "use client"

// // import Loader from '@/components/Loader';
// // import axios from 'axios'
// // import Link from 'next/link';
// // import React, { useEffect, useState } from 'react'

// // const page = ({params}) => {
// //     const examId=params.examId
// // const [exam,setExam]=useState(null)
// // async function getExam(){
  
// //     try {
        

// //         const response=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/exam/${examId}`)
// //         if(response.data){
// //             setExam(response.data.data) 
// //         }
// //     } catch (error) {
        
// //     }

    
// // }

// // useEffect(()=>{
// //     getExam()
// // },[examId])

// // if(!exam){
// //   return <Loader/>
// // }
// //   return (
// //    <>
// //      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center py-12">
// //       <div className="max-w-2xl w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
// //         <div className="p-6">
// //           <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{exam.name}</h1>
// //           <div className="text-sm text-gray-500 dark:text-gray-400 mb-8">
// //             <p><strong>Level:</strong> {exam.level}</p>
// //             <p><strong>Last Date to Apply:</strong> {new Date(exam.lastDate).toLocaleDateString()}</p>
// //             <p><strong>Registration Deadline:</strong> {new Date(exam.registrationDeadline).toLocaleDateString()}</p>
// //             <p><strong>Eligibility:</strong> {exam.eligibility}</p>
// //           </div>
// //           <hr className="border-gray-300 dark:border-gray-600 my-4" />
// //           <div className="mb-8">
// //             <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Subjects</h2>
// //             <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
// //               {exam.subjects.map((subject, index) => (
// //                 <li key={index}>{subject}</li>
// //               ))}
// //             </ul>
// //           </div>
// //           <hr className="border-gray-300 dark:border-gray-600 my-4" />
// //           <div className="mb-8">
// //             <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Format</h2>
// //             <p className="text-gray-600 dark:text-gray-400">{exam.format}</p>
// //           </div>
// //           <hr className="border-gray-300 dark:border-gray-600 my-4" />
// //           <div className="mb-8">
// //             <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Opportunities</h2>
// //             {exam.opportunities.map((opportunity, index) => (
// //               <div key={index} className="mb-4">
// //                 <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{opportunity.type}</h3>
// //                 <p className="text-gray-600 dark:text-gray-400">{opportunity.description}</p>
// //                 {opportunity.benefits && (
// //                   <p className="text-gray-500 dark:text-gray-500"><strong>Benefits:</strong> {opportunity.benefits}</p>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //           <hr className="border-gray-300 dark:border-gray-600 my-4" />
// //           <div className="mb-8">
// //             <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Important Notes</h2>
// //             <p className="text-gray-600 dark:text-gray-400">{exam.importantNotes}</p>
// //           </div>
// //           <hr className="border-gray-300 dark:border-gray-600 my-4" />
// //           <div className="mb-8">
// //             <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Description</h2>
// //             <p className="text-gray-600 dark:text-gray-400">{exam.description}</p>
// //           </div>
// //           <div className="mt-8">
// //             <a
// //               href={exam.officialWebsite}
// //               className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-800 block text-center"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //             >
// //               Official Website
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //     </>
// //   );
// // };


// // export default page


// "use client";

// import Loader from "@/components/Loader";
// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Page = ({ params }) => {
//   const examId = params.examId;
//   const [exam, setExam] = useState(null);

//   async function getExam() {
//     try {
//       const response = await axios.get(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/api/exam/${examId}`
//       );
//       if (response.data) {
//         setExam(response.data.data);
//       }
//     } catch (error) {
//       // Handle error
//       console.error("Error fetching exam:", error);
//     }
//   }

//   useEffect(() => {
//     getExam();
//   }, [examId]);

//   if (!exam) {
//     return <Loader />;
//   }

//   return (
//     <>
//       <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center py-12">
//         <div className="max-w-2xl w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
//           <div className="p-6">
//             <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
//               {exam.name}
//             </h1>
//             <div className="text-sm text-gray-500 dark:text-gray-400 mb-8">
//               <p>
//                 <strong>Level:</strong> {exam.level}
//               </p>
//               <p>
//                 <strong>Last Date to Apply:</strong>{" "}
//                 {new Date(exam.lastDate).toLocaleDateString()}
//               </p>
//               <p>
//                 <strong>Registration Deadline:</strong>{" "}
//                 {new Date(exam.registrationDeadline).toLocaleDateString()}
//               </p>
//               <p>
//                 <strong>Eligibility:</strong> {exam.eligibility}
//               </p>
//             </div>
//             <hr className="border-gray-300 dark:border-gray-600 my-4" />
//             <div className="mb-8">
//               <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
//                 Subjects
//               </h2>
//               <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
//                 {exam.subjects.map((subject, index) => (
//                   <li key={index}>{subject}</li>
//                 ))}
//               </ul>
//             </div>
//             <hr className="border-gray-300 dark:border-gray-600 my-4" />
//             <div className="mb-8">
//               <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
//                 Format
//               </h2>
//               <p className="text-gray-600 dark:text-gray-400">{exam.format}</p>
//             </div>
//             <hr className="border-gray-300 dark:border-gray-600 my-4" />
//             <div className="mb-8">
//               <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
//                 Opportunities
//               </h2>
//               {exam.opportunities.map((opportunity, index) => (
//                 <div key={index} className="mb-4">
//                   <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
//                     {opportunity.type}
//                   </h3>
//                   <p className="text-gray-600 dark:text-gray-400">
//                     {opportunity.description}
//                   </p>
//                   {opportunity.benefits && (
//                     <p className="text-gray-500 dark:text-gray-500">
//                       <strong>Benefits:</strong> {opportunity.benefits}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//             <hr className="border-gray-300 dark:border-gray-600 my-4" />
//             <div className="mb-8">
//               <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
//                 Important Notes
//               </h2>
//               <p className="text-gray-600 dark:text-gray-400">
//                 {exam.importantNotes}
//               </p>
//             </div>
//             <hr className="border-gray-300 dark:border-gray-600 my-4" />
//             <div className="mb-8">
//               <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
//                 Description
//               </h2>
//               <p className="text-gray-600 dark:text-gray-400">
//                 {exam.description}
//               </p>
//             </div>
//             <div className="mt-8">
//               <a
//                 href={exam.officialWebsite}
//                 className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-800 block text-center"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Official Website
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Page;




'use client'

import { useEffect, useState } from 'react'

import Loader from '@/components/Loader'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'

export default function Page({ params }) {
  const examId = params.examId;
  const [exam, setExam] = useState(null);

  async function getExam() {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/exams/${examId}`
      );
      if (response.data) {
        setExam(response.data.data);
      }
    } catch (error) {
      // Handle error
      console.error("Error fetching exam:", error);
    }
  }
console.log(exam);
  useEffect(() => {
    getExam();
  }, [examId]);

  console.log(exam);

  if (!exam) {
    return <Loader />;
  }

  return (
    <div className="relative bg-white">
    <div className="absolute inset-0">
      <Image
        src="https://as1.ftcdn.net/v2/jpg/07/24/90/06/1000_F_724900608_A9g7lCdG57eFSiBdGm4fSWRkbMVvopvB.jpg" 
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional: Add overlay */}
    </div>
    
    <div className="relative pt-6">
      <nav aria-label="Breadcrumb">
        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl ml-11">{exam.name}</h1>
        </ol>
      </nav>

      {/* Product info */}
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"></div>

        {/* Options */}
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <form className="mt-10">
            <div className="w-full lg:w-1/3 px-4">
              <h3 className="text-lg font-bold mb-4 text-white">Subjects</h3>
              <ul className="list-disc pl-4 text-white">
                {exam.subjects.map((subject, index) => (
                  <li key={index}>{subject}</li>
                ))}
              </ul>
            </div>
            <Link href={'/teacher'}
              type="submit"
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Find Teachers
            </Link>
          </form>
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Description</h3>
            <div className="space-y-6">
              <p className="text-xl font-semibold text-white">{exam.description}</p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-bold text-white">Highlights</h3>
            <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2 text-white">Opportunities</h3>
        {exam.opportunities.length > 0 ? (
          <ul className="list-disc space-y-2 pl-4 text-sm text-white">
            {exam.opportunities.map((opportunity) => (
              <li key={opportunity._id}>
                <h4 className="font-semibold">{opportunity.type}</h4>
                <p>{opportunity.description}</p>
                <p><span className="font-semibold">Benefits:</span> {opportunity.benefits}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No opportunities available</p>
        )}
      </div>
      <div className="mt-4">
  <h3 className="text-sm font-bold text-white">Eligibility</h3>
  <ul role="list" className="list-disc space-y-2 pl-4 text-sm text-white">
    {exam.degree.map((degree, index) => (
      <li key={index} className="text-gray-400">
        <span className="text-gray-300">{degree}</span>
      </li>
    ))}
  </ul>
</div>

          </div>

          <div className="mt-10">
            <h2 className="text-sm font-medium text-white">Details</h2>
            <div className="mt-4 space-y-6">
              <p className="text-sm text-white">Important Dates: {exam.importantDates}</p>
              <p className="text-sm text-white">Last Date: {new Date(exam.lastDate).toLocaleDateString()}</p>
              <p className="text-sm text-white">Stream: {exam.stream}</p>
              <p className="text-sm text-white">Exam type: {exam.type}</p>
              <p className="text-sm text-white">Duration: {exam.duration}</p>
              <p className="text-xl text-white">Official Website: 
                <Link href={exam.officialWebsite}>
                  <h1 className="text-blue-400 underline">{exam.officialWebsite}</h1>
                </Link>
              </p>
              <p className="text-sm text-white">Format: {exam.format}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}





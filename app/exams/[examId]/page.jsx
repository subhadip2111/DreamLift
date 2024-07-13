
// "use client"

// import Loader from '@/components/Loader';
// import axios from 'axios'
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react'

// const page = ({params}) => {
//     const examId=params.examId
// const [exam,setExam]=useState(null)
// async function getExam(){
  
//     try {
        

//         const response=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/exam/${examId}`)
//         if(response.data){
//             setExam(response.data.data) 
//         }
//     } catch (error) {
        
//     }

    
// }

// useEffect(()=>{
//     getExam()
// },[examId])

// if(!exam){
//   return <Loader/>
// }
//   return (
//    <>
//      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center py-12">
//       <div className="max-w-2xl w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
//         <div className="p-6">
//           <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{exam.name}</h1>
//           <div className="text-sm text-gray-500 dark:text-gray-400 mb-8">
//             <p><strong>Level:</strong> {exam.level}</p>
//             <p><strong>Last Date to Apply:</strong> {new Date(exam.lastDate).toLocaleDateString()}</p>
//             <p><strong>Registration Deadline:</strong> {new Date(exam.registrationDeadline).toLocaleDateString()}</p>
//             <p><strong>Eligibility:</strong> {exam.eligibility}</p>
//           </div>
//           <hr className="border-gray-300 dark:border-gray-600 my-4" />
//           <div className="mb-8">
//             <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Subjects</h2>
//             <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
//               {exam.subjects.map((subject, index) => (
//                 <li key={index}>{subject}</li>
//               ))}
//             </ul>
//           </div>
//           <hr className="border-gray-300 dark:border-gray-600 my-4" />
//           <div className="mb-8">
//             <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Format</h2>
//             <p className="text-gray-600 dark:text-gray-400">{exam.format}</p>
//           </div>
//           <hr className="border-gray-300 dark:border-gray-600 my-4" />
//           <div className="mb-8">
//             <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Opportunities</h2>
//             {exam.opportunities.map((opportunity, index) => (
//               <div key={index} className="mb-4">
//                 <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{opportunity.type}</h3>
//                 <p className="text-gray-600 dark:text-gray-400">{opportunity.description}</p>
//                 {opportunity.benefits && (
//                   <p className="text-gray-500 dark:text-gray-500"><strong>Benefits:</strong> {opportunity.benefits}</p>
//                 )}
//               </div>
//             ))}
//           </div>
//           <hr className="border-gray-300 dark:border-gray-600 my-4" />
//           <div className="mb-8">
//             <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Important Notes</h2>
//             <p className="text-gray-600 dark:text-gray-400">{exam.importantNotes}</p>
//           </div>
//           <hr className="border-gray-300 dark:border-gray-600 my-4" />
//           <div className="mb-8">
//             <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Description</h2>
//             <p className="text-gray-600 dark:text-gray-400">{exam.description}</p>
//           </div>
//           <div className="mt-8">
//             <a
//               href={exam.officialWebsite}
//               className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-800 block text-center"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Official Website
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };


// export default page


"use client";

import Loader from "@/components/Loader";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const examId = params.examId;
  const [exam, setExam] = useState(null);

  async function getExam() {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/exam/${examId}`
      );
      if (response.data) {
        setExam(response.data.data);
      }
    } catch (error) {
      // Handle error
      console.error("Error fetching exam:", error);
    }
  }

  useEffect(() => {
    getExam();
  }, [examId]);

  if (!exam) {
    return <Loader />;
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center py-12">
        <div className="max-w-2xl w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              {exam.name}
            </h1>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-8">
              <p>
                <strong>Level:</strong> {exam.level}
              </p>
              <p>
                <strong>Last Date to Apply:</strong>{" "}
                {new Date(exam.lastDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Registration Deadline:</strong>{" "}
                {new Date(exam.registrationDeadline).toLocaleDateString()}
              </p>
              <p>
                <strong>Eligibility:</strong> {exam.eligibility}
              </p>
            </div>
            <hr className="border-gray-300 dark:border-gray-600 my-4" />
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Subjects
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                {exam.subjects.map((subject, index) => (
                  <li key={index}>{subject}</li>
                ))}
              </ul>
            </div>
            <hr className="border-gray-300 dark:border-gray-600 my-4" />
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Format
              </h2>
              <p className="text-gray-600 dark:text-gray-400">{exam.format}</p>
            </div>
            <hr className="border-gray-300 dark:border-gray-600 my-4" />
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Opportunities
              </h2>
              {exam.opportunities.map((opportunity, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {opportunity.type}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {opportunity.description}
                  </p>
                  {opportunity.benefits && (
                    <p className="text-gray-500 dark:text-gray-500">
                      <strong>Benefits:</strong> {opportunity.benefits}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <hr className="border-gray-300 dark:border-gray-600 my-4" />
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Important Notes
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {exam.importantNotes}
              </p>
            </div>
            <hr className="border-gray-300 dark:border-gray-600 my-4" />
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Description
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {exam.description}
              </p>
            </div>
            <div className="mt-8">
              <a
                href={exam.officialWebsite}
                className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-800 block text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

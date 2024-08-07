import Link from 'next/link';
import React from 'react';  

const FilterExamCard = ({ exam }) => {
  return (
    <div className=" w-96 h-[500px]  m-2   group px-10 py-5 bg-black rounded-xl flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#f7a65a] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500  cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all overflow-hidden ">
      <div className="px-6 py-8 ">
        <div className=" w-8 h-8 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"></div>
        <div className="cardtxt font-semibold text-white tracking-wider group-hover:text-gray-700 text-xl">
          {exam.name}
        </div>
        <div className="text-gray-300 uppercase tracking-widest text-sm">
          {exam.level}
        </div>
        <div className="text-gray-400 mt-4 text-sm">
          <p className="font-bold">Last Date to Apply: {exam.registrationDeadline}</p>
          <p className="mt-2">Eligibility: {exam.eligibility}</p>
          <p className="mt-2">Subjects: {exam.subjects.join(', ')}</p>
          <p className="mt-2 ">Format: {exam.format}</p>
          <p className="mt-2">Important Notes: {exam.importantNotes}</p>
          <p className="mt-2">Official Website: 
            <Link href={exam.officialWebsite}  className="text-blue-400 hover:underline ml-1">
              {exam.officialWebsite}
            </Link>
          </p>
        </div>
      </div>
            <div className="p-6 pt-0">
        <button
         className="select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
           <Link href={`/exams/${exam._id}`} >
            Read More
         </Link>
         </button>
     </div>
    </div>  
  );
};

export default FilterExamCard;



// 


// import Link from 'next/link';
// import React from 'react';

// const FilterExamCard = ({ exam }) => {
//   return (
//     <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">

//       {/* Background with gradient */}
//       <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/40">
//       </div>

//       {/* Main content */}
//       <div className="p-6">
//         <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
//           {exam.name}
//         </h5>
//         <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
//           {exam.description}
//         </p>
//       </div>

//       {/* Footer with button */}
//       <div className="p-6 pt-0">
//         <button
//           className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//         >
//           <Link href={"/"} target="_blank" rel="noopener noreferrer">
//             Read More
//           </Link>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FilterExamCard;


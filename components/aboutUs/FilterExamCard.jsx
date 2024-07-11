import React from 'react';

const FilterExamCard = ({ exam }) => {
  return (

    <div className="w-[390px] max-w-[450px] h-[500px] max-h-[500px] rounded-[40px] border border-black  mb-8 py-12 px-28 text-center md:py-[60px] md:px-[70px] ">
    <h3 className="text-gray-900 pt-1 text-xl font-bold sm:text-2xl">Exam Name</h3>
    <h3 className="text-gray-900 pb-2text-xl font-bold sm:text-2xl">last date To apply</h3>
    <h3 className="text-gray-900 pb-2 text-xl font-bold sm:text-2xl">Eligibility</h3>
    <h3 className="text-gray-900 pb-2 text-xl font-bold sm:text-2xl">Opportunities 

      
    </h3>

    <span className="bg-red-500 mx-auto mb-6 inline-block h-1 w-[200px] rounded"></span>
    <p className="text-black mb-10 text-base leading-relaxed">Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    <div className="flex flex-wrap gap-4">
      <div className="flex-1">
      </div>
      
        <button className="bg-blue-500 whitespace-nowrap border-blue-500 block w-full rounded-lg border p -3 text-center text-base font-medium text-white transition hover:bg-opacity-90">View Details</button>
      
    </div>
  </div>
  );



};

export default FilterExamCard;



// import React from 'react';

// const FilterExamCard = ({ exam }) => {
//   return (
//     <div className="w-full max-w-[600px] rounded-[20px] py-12 px-14 text-center md:py-[60px] md:px-[70px] border border-green-600 bg-yellow-100-50 backdrop-blur-none overflow-hidden shadow-2xl">
//       <h3 className="text-gray-900 pb-2 text-xl font-bold sm:text-2xl">{exam.name}</h3>
//       <h4 className="text-gray-800 pb-2 text-lg sm:text-xl">Last Date to Apply: {exam.deadline}</h4>
//       <span className="bg-blue-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
//       <p className="text-gray-500 mb-10 text-base leading-relaxed">{exam.description}</p>
//       <div className="flex flex-wrap gap-4">
//         <div className="flex-1">
//           <button className="text-gray-900 block w-full rounded-lg border border-gray-200 p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white">Cancel</button>
//         </div>
//         <div className="flex-1">
//           <button className="bg-blue-500 whitespace-nowrap border-blue-500 block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90">View Details</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterExamCard;

// import React from 'react';

// const FilterExamCard = ({ exam }) => {
//   return (
//     <div className="w-full max-w-[600px] rounded-[20px] bg-yellow-200 py-12 px-14 text-center md:py-[60px] md:px-[70px] border border-green-600 hover:shadow-2xl hover:bg-red-200 transition-all duration-800 ease-in-out">
//       <h3 className="text-gray-900 pb-2 text-xl font-bold sm:text-2xl">{exam.name}</h3>
//       <h4 className="text-gray-900 pb-2 text-xl font-bold sm:text-2xl">Level: {exam.level}</h4>
//       <h4 className="text-gray-900 pb-2 text-xl font-bold sm:text-2xl">Date: {exam.date}</h4>
//       <h4 className="text-gray-900 pb-2 text-xl font-bold sm:text-2xl">Registration Deadline: {exam.registrationDeadline}</h4>
//       <h4 className="text-gray-900 pb-2 text-xl font-bold sm:text-2xl">Eligibility: {exam.eligibility}</h4>
//       <h4 className="text-gray-900 pb-2 text-xl font-bold sm:text-2xl">Subjects: {exam.subjects.join(', ')}</h4>
//       <h4 className="text-gray-900 pb-2 text-xl font-bold sm:text-2xl">Format: {exam.format}</h4>
//       <a href={exam.officialWebsite} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
//         Official Website
//       </a>
//       <span className="bg-blue-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
//       <p className="text-gray-500 mb-10 text-base leading-relaxed">{exam.importantNotes}</p>
//       <div className="flex flex-wrap gap-4">
//         <div className="flex-1">
//           <button className="text-gray-900 block w-full rounded-lg border border-gray-200 p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white">Cancel</button>
//         </div>
//         <div className="flex-1">
//           <button className="bg-blue-500 whitespace-nowrap border-blue-500 block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90">View Details</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterExamCard;

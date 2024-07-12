// "use client";

// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import FilterExamCard from "./aboutUs/FilterExamCard";
// import axios from "axios";
// import Loader from "./Loader";
// import { degreeSubjects } from "@/utils/data";
// import { useDebounce } from "@/utils/validation";
// import NoDataFound from "./NotFound";

// const SearchBar = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   const [search, Setsearch] = useState("");
//   const debouncedKeyword=useDebounce(search,500)
//   const [showModal, setShowModal] = useState(false);
//   const [examList, setExamList] = useState(null);
//   const [selectedDegree, setSelectedDegree] = useState("");
//   const [selectedSubject, setSelectedSubject] = useState("");
//   const [subjects, setSubjects] = useState([]);
//   const handleButtonClick = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     handleSubmit();
//   };

//   const handleDegreeChange = (e) => {
//     const degree = e.target.value;
//     setSelectedDegree(degree);
//     setSubjects(degreeSubjects[degree] || []);
//   };

//   const handleSubjectChange = (e) => {
//     setSelectedSubject(e.target.value);
//   };

//   const handleSubmit = () => {
//     // Implement your filter logic here
//     console.log("Degree:", selectedDegree);
//     console.log("Subject:", selectedSubject);
//   };

//   const searchHandler = (e) => {
//     Setsearch(e.target.value);
//     console.log("search handler", search);
//   };

//   const clearFilters = () => {
//     Setsearch("");
//     setSelectedDegree("");
//     setSelectedSubject("");
//     setSubjects([]);
//     setExamList([]);
//   };
//   const limit = 10;
//   const offset = 0;
//   const keyword = debouncedKeyword;

//   async function getExam() {
//     setIsLoading(true);
//     try {
//       const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/exam`, { params: { limit, offset, keyword } });
//       console.log(res.data);
//       if (res.data.data) {
//         setExamList(res.data.data);
//       } else {
//         setExamList([]);
//       }
//     } catch (error) {
//       console.error("Error fetching exam data:", error);
//       setExamList([]);
//     }
//     setIsLoading(false);
//   }
//   useEffect(() => {
// if (debouncedKeyword !== "") {
//       getExam();
//     } else {
//       setExamList(null); // Reset exam list to null or empty array based on your implementation
//     }  }, [debouncedKeyword]);

//   if (isLoading) {
//     return <Loader />;
//   }
//   useEffect(() => {
//     clearFilters();
//   }, []);


//   return (
//     <>
//       <div className="w-full flex flex-col items-center py-4 bg-[#0b2929]">
//         <div className="flex w-full max-w-[1030px] px-4 items-center">
//           <form className="flex-grow">
//             <label
//               className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
//               htmlFor="default-search"
//             >
//               Search
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <svg
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   aria-hidden="true"
//                   className="w-4 h-4 text-gray-500 dark:text-gray-400"
//                 >
//                   <path
//                     d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                     strokeWidth="2"
//                     strokeLinejoin="round"
//                     strokeLinecap="round"
//                     stroke="currentColor"
//                   ></path>
//                 </svg>
//               </div>
//               <input
//                 onChange={searchHandler}
//                 placeholder="Search"
//                 className="block w-full p-4 pl-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 id="default-search"
//                 type="search"
//               />
//               <button
//                 type="submit"
//                 className="absolute right-2.5 bottom-1/2 transform translate-y-1/2 p-4 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 <svg
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   aria-hidden="true"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                     strokeWidth="2"
//                     strokeLinejoin="round"
//                     strokeLinecap="round"
//                     stroke="currentColor"
//                   ></path>
//                 </svg>
//                 <span className="sr-only">Search</span>
//               </button>
//             </div>
//           </form>

//           <button
//             onClick={handleButtonClick}
//             className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[4px] bg-black rounded-[16px] bg-gradient-to-t from-[#212121] to-[#212121] active:scale-95 ml-4"
//           >
//             <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
//               <Image
//                 src="/filter.png"
//                 height={40}
//                 width={40}
//                 alt="Filter Icon"
//                 className=" rounded-lg"
//               />
//             </div>
//             <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"></div>
//           </button>
//         </div>

//         {showModal && (
//           <div className="fixed inset-0 flex justify-end z-50">
//             <div
//               className="fixed inset-0 bg-black bg-opacity-50"
//               onClick={handleCloseModal}
//             ></div>
//             <div className="relative w-96 h-full bg-white shadow-lg">
//               <button
//                 onClick={handleCloseModal}
//                 className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={2}
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//               <div className="p-4">
//                 <h2 className="text-lg font-semibold mb-4">Filter Exams</h2>
//                 <div>
//                   <label className="block mb-2 text-sm font-medium text-gray-700">
//                     Select Your Degree
//                   </label>
//                   <select
//                     value={selectedDegree}
//                     onChange={handleDegreeChange}
//                     className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   >
//                     <option value="">Select your degree</option>
//                     {Object.keys(degreeSubjects).map((degree) => (
//                       <option key={degree} value={degree}>
//                         {degree}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="mt-4">
//                   <label className="block mb-2 text-sm font-medium text-gray-700">
//                     Subject
//                   </label>
//                   <select
//                     value={selectedSubject}
//                     onChange={handleSubjectChange}
//                     className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   >
//                     <option value="">Select your subject</option>
//                     {subjects.map((subject) => (
//                       <option key={subject} value={subject}>
//                         {subject}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <button
//                   //  onClick={handleSubmit}
//                   onClick={handleCloseModal}
//                   className="mt-4 w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                 >
//                   Apply Filters
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {examList !== null ? (
//   examList.length > 0 ? (
//     <div className="flex flex-wrap gap-12 mt-4 ml-20 overflow-hidden">
//       {examList.map((exam, index) => (
//         <FilterExamCard key={index} exam={exam} />
//       ))}
//     </div>
//   ) : (
//     <div className="max-w-[1030px] w-full px-4 mx-auto mt-8">
//       <div className="bg-white dark:bg-gray-800 p-4 shadow-lg rounded-lg">
//         <h2 className="text-lg font-semibold text-center text-gray-900 dark:text-gray-200">No exams found.</h2>
//       </div>
//     </div>
//   )
// ) : (
//   <Loader />
// )}

     

//     </>
//   );
// };

// export default SearchBar;



import Image from "next/image";
import React, { useEffect, useState } from "react";
import FilterExamCard from "./FilterExamCard";
import axios from "axios";
import Loader from "./Loader";
import { degreeSubjects } from "@/utils/data";
import { useDebounce } from "@/utils/validation";
import NoDataFound from "./NotFound";
const SearchBar = () => {
  const [search, setSearch] = useState('');
  const debouncedKeyword = useDebounce(search, 500);
  const [showModal, setShowModal] = useState(false);
  const [examList, setExamList] = useState(null);
  const [selectedDegree, setSelectedDegree] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [subjects, setSubjects] = useState(degreeSubjects);
  const [isLoading, setIsLoading] = useState(false);
  const limit = 10;
  const offset = 0;

  // Function to clear all filters and reset state
  const clearFilters = () => {
    setSearch('');
    setSelectedDegree('');
    setSelectedSubject('');
    setSubjects([]);
    setExamList(null);
  };

  // Fetch exam data based on filters
  async function getExam() {
    setIsLoading(true);
    try {
      const params = { limit, offset };
  if(debouncedKeyword){
params.keyword=debouncedKeyword
  }
      // Optionally add selectedDegree if it exists
      if (selectedDegree) {
        params.degree = selectedDegree;
      }
  
      // Optionally add selectedSubject if it exists
      if (selectedSubject) {
        params.subject = selectedSubject;
      }
  
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/exam`, {
        params,
      });
  
      if (res.data.data) {
        setExamList(res.data.data);
      } else {
        setExamList([]);
      }
    } catch (error) {
      console.error('Error fetching exam data:', error);
      setExamList([]);
    } finally {
      setIsLoading(false);
    }
  }
  
  // Effect to fetch exam data when search keyword changes
  useEffect(() => {
    getExam();
  }, [debouncedKeyword, selectedDegree, selectedSubject]); // Include selected filters in dependency array

  // Effect to clear search input when component mounts or refreshes
  useEffect(() => {
    clearFilters();
  }, []);

  // Function to handle degree selection change
  const handleDegreeChange = (e) => {
    const degree = e.target.value;
    setSelectedDegree(degree);
    setSubjects(degreeSubjects[degree] || []);
  };

  // Function to handle subject selection change
  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  // Function to handle form submission (apply filters)
  const handleSubmit = (e) => {
    e.preventDefault();
    getExam();
    setShowModal(false)
  };

  // Function to handle search input change
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  // Render loading state while fetching data
  if (isLoading) {
    return <Loader />;
  }

  // Render the component with search bar, filter modal, and exam cards
  return (
    <>
      <div className="w-full flex flex-col items-center py-4 bg-[#0b2929]">
        <div className="flex w-full max-w-[1030px] px-4 items-center">
          <form className="flex-grow" onSubmit={handleSubmit}>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" htmlFor="default-search">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                >
                  <path
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    stroke="currentColor"
                  ></path>
                </svg>
              </div>
              <input
                onChange={searchHandler}
                value={search}
                placeholder="Search"
                className="block w-full p-4 pl-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="default-search"
                type="search"
              />
              <button
                type="submit"
                className="absolute right-2.5 bottom-1/2 transform translate-y-1/2 p-4 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-4"
                >
                  <path
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    stroke="currentColor"
                  ></path>
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </form>

          <button
            onClick={() => setShowModal(true)}
            className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[4px] bg-black rounded-[16px] bg-gradient-to-t from-[#212121] to-[#212121] active:scale-95 ml-4"
          >
            <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
              <Image src="/filter.png" height={40} width={40} alt="Filter Icon" className=" rounded-lg" />
            </div>
            <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"></div>
          </button>
        </div>

        {/* Modal for filters */}
        {showModal && (
          <div className="fixed inset-0 flex justify-end z-50">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setShowModal(false)}></div>
            <div className="relative w-96 h-full bg-yellow-100 shadow-lg">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">Filter Exams</h2>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Select Your Degree</label>
                  <select
                    value={selectedDegree}
                    onChange={handleDegreeChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select your degree</option>
                    {Object.keys(degreeSubjects).map((degree) => (
                      <option key={degree} value={degree}>
                        {degree}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
                  <select
                    value={selectedSubject}
                    onChange={handleSubjectChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select your subject</option>
                    {subjects?.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-4 flex justify-between gap-3">
                  {/* Button to clear filters */}
                  <button
                    onClick={clearFilters}
                    className="w-1/2 p-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                  >
                    Clear Filters
                  </button>
                  <button
//                   //  onClick={handleSubmit}
 // Apply Filters button
onClick={handleSubmit}
                  className="w-1/2 p-2 inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-[#7747FF] hover:bg-white hover:text-[#7747FF] focus:text-[#7747FF] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200"
                >
                  Apply Filters
                </button>
                  {/* Any other buttons or actions */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {examList !== null ? (
  examList.length > 0 ? (
    <div className="flex flex-wrap gap-12 mt-4 ml-20 overflow-hidden">
      {examList.map((exam, index) => (
        <FilterExamCard key={index} exam={exam} />
      ))}
    </div>
  ) : (
    <NoDataFound/>
  )
) : (
  <Loader />
)}
    </>
  );
};

export default SearchBar;

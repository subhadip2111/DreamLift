
"use client"

import axios from 'axios'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
    const examId=params.examId
const [exam,setExam]=useState(null)
async function getExam(){
  
    try {
        

        const response=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/exam/${examId}`)
        if(response.data){
            setExam(response.data.data) 
        }
    } catch (error) {
        
    }

    
}

useEffect(()=>{
    getExam()
},[examId])
  return (
   <>
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">{exam?.name}</h1>
        <p className="text-gray-400 mb-2"><strong>Level:</strong> {exam?.level}</p>
        <p className="text-gray-400 mb-2"><strong>Last Date to Apply:</strong> {exam?.registrationDeadline}</p>
        <p className="text-gray-400 mb-2"><strong>Eligibility:</strong> {exam?.eligibility}</p>
        <p className="text-gray-400 mb-2"><strong>Subjects:</strong> {exam?.subjects.join(', ')}</p>
        <p className="text-gray-400 mb-2"><strong>Format:</strong> {exam?.format}</p>
        <p className="text-gray-400 mb-2"><strong>Important Notes:</strong> {exam?.importantNotes}</p>
        <p className="text-gray-400 mb-2"><strong>Official Website:</strong>
          {/* <Link href={exam?.officialWebsite} target="_blank" rel="noopener noreferrer">
            <a className="text-blue-400 hover:underline ml-1">{exam?.officialWebsite}</a>
          </Link> */}
        </p>
        {/* <Link href="/exams">
          <a className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition">
            Back to Exams
          </a>
        </Link>  */}
      </div>
    </div>
    </>
  );
};


export default page
/**
 * import React from "react";

const Blog = () => {
  return (
    <>
      <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://i.ibb.co/Y23YC07/image-02.jpg"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://i.ibb.co/7jdcnwn/image-03.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {date && (
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                {date}
              </span>
            )}
            <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

 */
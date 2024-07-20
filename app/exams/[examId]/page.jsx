


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

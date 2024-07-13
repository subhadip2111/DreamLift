import Image from "next/image";
import Link from "next/link";

const CareerPaths = () => {
    return (
      <div className="w-full  bg-yellow-100 text-gray-800 font-inter">
        
        <div className="p-6">
          {/* <h2 className="text-2xl font-semibold mb-4">Explore Options</h2> */}
          <div className="flex justify-center space-x-4 mb-6">
            <Link href={"#"} className="px-4 py-2 bg-teal-400 text-white rounded">All</Link>
            <Link  href={"#"} className="px-4 py-2  bg-gray-800  text-white rounded">Fields</Link>
            <Link href={"#"} className="px-4 py-2  bg-red-400 text-white rounded">Exams</Link>
            <Link href={"#"} className="px-4 py-2  bg-yellow-400 text-white rounded">Opportunities</Link>
            <Link href={"#"} className="px-4 py-2  bg-green-400 text-white rounded">Colleges</Link>
            <Link href={"#"} className="px-4 py-2  bg-teal-950 text-white rounded">Pathways</Link>
            <Link href={"#"}  className="px-4 py-2  bg-blue-600 text-white rounded">Decisions</Link>
          </div>
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Discover</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 border rounded flex flex-col items-center bg-[#EB984E] shadow-lg">
                <Image src="/library.png" alt="Academic Journey" className="w-10 h-10 mb-2" />
                <span className="text-sm">Academic Journey</span>
              </div>
              <div className="p-4 border rounded flex flex-col items-center bg-[#EB984E] shadow-lg">
                <Image src="/global.png" alt="Global Learning" className="w-10 h-10 mb-2" />
                <span className="text-sm">Global Learning</span>
              </div>
              <div className="p-4 border rounded flex flex-col items-center bg-[#EB984E] shadow-lg">
                <Image src="/education.png" alt="Educational Dreams" className="w-10 h-10 mb-2" />
                <span className="text-sm">Educational Dreams</span>
              </div>
              <div className="p-4 border rounded flex flex-col items-center bg-[#EB984E] shadow-lg">
                <Image src="/study.png" alt="Study Abroad" className="w-10 h-10 mb-2" />
                <span className="text-sm">Study Abroad</span>
              </div>
              <div className="p-4 border rounded flex flex-col items-center bg-[#EB984E] shadow-lg">
                <Image src="/career.png" alt="Career Growth" className="w-10 h-10 mb-2" />
                <span className="text-sm">Career Growth</span>
              </div>
              <div className="p-4 border rounded flex flex-col items-center bg-[#EB984E] shadow-lg">
                <Image src="/learning.png" alt="Learning" className="w-10 h-10 mb-2" />
                <span className="text-sm">Learning</span>
              </div>
              <div className="p-4 border rounded flex flex-col items-center bg-[#EB984E] shadow-lg">
                <Image src="/feture.png" alt="Future Plans" className="w-10 h-10 mb-2" />
                <span className="text-sm">Future Plans</span>
              </div>
              <div className="p-4 border rounded flex flex-col items-center bg-[#EB984E] shadow-lg">
                <Image src="/successPath.png" alt="Success Path" className="w-10 h-10 mb-2" />
                <span className="text-sm">Success Path</span>
              </div>
              <div className="p-4 border rounded flex flex-col items-center bg-[#EB984E] shadow-lg">
                <Image src="/skill.png" alt="Success Path" className="w-10 h-10 mb-2" />
                <span className="text-sm">Skill</span>
              </div>


              
            </div>
          </section>
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Study Paths</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative">
                <Image src="/focus.jpg" alt="Focus & Progress" className="w-full h-32 object-cover rounded" />
                <span className="absolute bottom-2 left-2 text-white text-sm">Focus & Progress</span>
              </div>
              <div className="relative">
                <Image src="/study.jpg" alt="Study Routine" className="w-full h-32 object-cover rounded" />
                <span className="absolute bottom-2 left-2 text-white text-sm">Study Routine</span>
              </div>
              <div className="relative">
                <Image src="/balence.jpg" alt="Finding Balance" className="w-full h-32 object-cover rounded" />
                <span className="absolute bottom-2 left-2 text-white text-sm">Finding Balance</span>
              </div>
              <div className="relative">
                <Image src="/acadamic.jpg" alt="Academic Excellence" className="w-full h-32 object-cover rounded" />
                <span className="absolute bottom-2 left-2 text-white text-sm">Academic Excellence</span>
              </div>
              <div className="relative">
                <Image src="/academic.jpg" alt="Achieving Goals" className="w-full h-32 object-cover rounded" />
                <span className="absolute bottom-2 left-2 text-white text-sm">Achieving Goals</span>
              </div>
              <div className="relative">
                <Image src="/hardWork.jpg" alt="Achieving Goals" className="w-full h-32 object-cover rounded" />
                <span className="absolute bottom-2 left-2 text-white text-sm">Consistency & Hard Work</span>
              </div>
            </div>
          </section>    
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Educational Videos</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative">
                <Image src="/education.jpg" alt="Educational Insights" className="w-60 h-32 object-cover rounded" />
                <span className="absolute bottom-2 left-2 text-white text-sm">Educational Insights: Guiding Academic Path</span>
              </div>
              <div className="relative">
                <Image src="/succes.jpg" alt="Learn Well, Succeed Well" className="w-full h-32 object-cover rounded" />
                <span className="absolute bottom-2 left-2 text-white text-sm">Learn Well, Succeed Well</span>
              </div>
              <div className="relative">
                <Image src="/path-to-image.jpg" alt="Mastering the Education Art" className="w-full h-32 object-cover rounded" />
                <span className="absolute bottom-2 left-2 text-white text-sm">Mastering the Education Art</span>
              </div>
              <div className="relative">
                <Image src="/path-to-image.jpg" alt="Healthy Mind & Body" className="w-full h-32 object-cover rounded" />
                <span className="absolute bottom-2 left-2 text-white text-sm">Healthy Mind & Body</span>
              </div>
              <div className="relative">
                <Image src="/path-to-image.jpg" alt="Daily Learning: Improving Skills" className="w-full h-32 object-cover rounded" />
                <span className="absolute bottom-2 left-2 text-white text-sm">Daily Learning: Improving Skills</span>
              </div>
            </div>
          </section>
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Career Quizzes</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 border rounded flex flex-col items-center">
                <Image src="/path-to-icon.png" alt="Career Insights" className="w-10 h-10 mb-2" />
                <span className="text-sm">Career Insights</span>
              </div>
              <div className="p-4 border rounded flex flex-col items-center">
                <Image src="/path-to-icon.png" alt="Pathway to Success" className="w-10 h-10 mb-2" />
                <span className="text-sm">Pathway to Success</span>
              </div>
              <div className="p-4 border rounded flex flex-col items-center">
                <Image src="/path-to-icon.png" alt="Wisdom for Careers" className="w-10 h-10 mb-2" />
                <span className="text-sm">Wisdom for Careers</span>
              </div>
              <div className="p-4 border rounded flex flex-col items-center">
                <Image src="/path-to-icon.png" alt="Professional Development" className="w-10 h-10 mb-2" />
                <span className="text-sm">Professional Development</span>
              </div>
              <div className="p-4 border rounded flex flex-col items-center">
                <Image src="/path-to-icon.png" alt="Achieve your dreams" className="w-10 h-10 mb-2" />
                <span className="text-sm">Achieve your dreams</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  export default CareerPaths;
  
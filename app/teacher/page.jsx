import React from 'react';
import { teachersData } from '@/utils/data';
import TeacherCard from '@/components/teacherCard';
import TeacherSearchBar from './componets/TeacherSearchBar';
import Loader from '@/components/Loader';

const Teachers = () => {

  if(!teachersData){
    return <Loader/>
  }
  return (


    <>
   < TeacherSearchBar/>
    
     <div className="flex flex-wrap gap-8 space-x-20 justify-center">
      {teachersData.map((teacher, index) => (
        <TeacherCard key={index} teacher={teacher} />
      ))}
    </div>
    </>
  );
};

export default Teachers;

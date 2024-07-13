"use client"
import React, { useState } from 'react';



import SearchBar from '../../components/SearchBar';


const Exam = () => {



const [onClicked,setOnClicked]=useState(false)
const [showModal, setShowModal] = useState(false);


const handleButtonClick = () => {
  setShowModal(true);
};

const handleCloseModal = () => {
  setShowModal(false);
};
  return (
  
    <>
   <SearchBar/>
  



    </>
  );
};

export default Exam;

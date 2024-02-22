import React from 'react';
import StudyIcon from '../Images/Studysvj.svg'
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { Gi3DStairs } from "react-icons/gi";

function Home() {
  return (
    <div>
      <div className=' relative w-full h-screen bg-[#84e49f] p-28 font-serif '>
            <p className=' text-[78px] font-semibold mt-[80px] leading-none'>Improve Your</p>
            <p className=' text-[100px] font-bold'>Knowledge</p>
            <button className=' ms-2 flex justify-center items-center px-3 py-2 mt-5 font-sans rounded-full text-[20px]  bg-[#263238]'>Lets Go &nbsp; <Gi3DStairs/></button>
            <img className=' absolute top-[80px] right-[100px] w-[600px]' src={StudyIcon} alt="" />
      </div>
    </div>
  );
}

export default Home;

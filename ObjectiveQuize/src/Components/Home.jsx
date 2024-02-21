import React from 'react';
import StudyIcon from '../Images/Studysvj.svg'
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { Gi3DStairs } from "react-icons/gi";

function Home() {
  return (
    <div>
      <div className=' relative w-full h-screen bg-[#84e49f] p-28 font-serif '>
            <p className=' text-[90px] font-semibold mt-[80px] '>Improve Your</p>
            <div className=' flex w-[450px]'>
            <p className=' text-[100px] font-bold'>Skills</p>
            <div className=' m-auto text-[100px]'><Gi3DStairs/></div>
            </div>
            <button className=' flex justify-center items-center px-3 py-2 mt-5 font-sans rounded-full text-[20px]  bg-[#263238]'>Lets Go &nbsp; <HiOutlinePaperAirplane /></button>
            <img className=' absolute top-[80px] right-[50px] w-[600px]' src={StudyIcon} alt="" />
      </div>
    </div>
  );
}

export default Home;

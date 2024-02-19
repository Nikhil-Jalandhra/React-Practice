import React from 'react';
import { FaRegCopyright } from "react-icons/fa";

function Cards() {
  return (
    <div>
      <div className='w-full h-screen bg-zinc-900 items-center px-14 flex gap-5'>
        <div className="cardContainer h-[57vh] w-1/2">
            <div className='card relative w-full h-full bg-[#004d43] rounded-lg flex items-center justify-center'>
                <img className='w-[20vh] ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-10 text-[#cdea68] flex items-center text-[2vh] px-3 py-1 rounded-full border-[1px] border-[#cdea68] font-semibold'><FaRegCopyright />2019-2022</button>
            </div>
        </div>
        <div className="cardContainer h-[57vh] w-1/2 flex gap-5">
            <div className='card relative w-1/2 h-full bg-[#212121] rounded-lg flex items-center justify-center'>
                <img className='w-[21vh]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute left-10 bottom-10 flex items-center text-[2vh] px-3 py-1 rounded-full border-[1px] border-white uppercase font-semibold'>Rating 5.0 on Clutch</button>
            </div>
            <div className='card relative w-1/2 h-full bg-[#212121] rounded-lg flex items-center justify-center'>
                <img className='w-[15vh]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute left-10 bottom-10 flex items-center text-[2vh] px-3 py-1 rounded-full border-[1px] border-white uppercase font-semibold'>Bussiness Bootcamp Alumni</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

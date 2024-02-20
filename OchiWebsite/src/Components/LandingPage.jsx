import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div>
      <div data-scroll data-scroll-section data-scroll-speed="-.6 " className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textStructure mt-[150px] px-20'>
            {["We Create", "Eye-Opening", "Presentations"].map((items, index)=>{
                return (
                <div className='masker' key={index}>
                    <div className="w-fit flex items-end overflow-hidden">
                        {index === 1 && (<motion.div initial={{width: 0}} animate={{width: "8vw"}} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1}} className=' mr-[1vw] w-[8vw] h-[5vw] rounded-md bg-red-500 overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                        </motion.div>)}
                        <h1 className="uppercase text-[6.5vw] leading-[6vw] tracking-tight font-['Founders Grotesk'] font-bold">{items}</h1>
                    </div>
                </div>);
            })}
        </div>
        <div className="border-t-[1px] mt-[135px] flex justify-between py-[20px] px-[55px]">
            {["For public and private companies", "From the first pitch to IPO"].map((items, index)=>{
                return <p key={index} className='text-md font-light tracking-tight leading-none'>{items}</p>
            })}
            
            <div className='start flex items-center gap-5'>
                <div className='px-3 py-[3px] border-[1px] rounded-full border-zinc-400 font-light uppercase'>Start The Project
                </div>

                <div className=" w-10 h-10 flex items-center justify-center border-[2px] rounded-full border-zinc-500 ">
                    <span className='rotate-[45deg]'>
                        <FaArrowUpLong/>
                    </span>
                </div>

            </div>
            
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

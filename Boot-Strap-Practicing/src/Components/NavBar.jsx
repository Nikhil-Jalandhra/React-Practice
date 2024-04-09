import React from 'react';
import logo from "../Images/logo.png"
import {motion} from "framer-motion"

function Home() {
  return (
    <>
      <div className='w-full h-[80px] bg-black flex'>
          <div className=' flex w-[70%] items-center justify-end pe-[80px]'>
              <img className=' select-none w-[90px]' src={logo} alt="Logo" />
              <h1 className='text-[45px] text-[#FE0000] font-extrabold uppercase'>Gaming-Hub</h1>
          </div>
          <div className='flex items-center flex-grow justify-end pe-[30px]'>
              <div className="dropdown mr-[20px]">
                  <button className="btn bg-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Games
                  </button>
                  <ul className="dropdown-menu bg-slate-100 ">
                      <li><a className="dropdown-item hover:bg-slate-300" href="#">Single-Player</a></li>
                      <li><a className="dropdown-item hover:bg-slate-300" href="#">Multy-Player</a></li>
                      <li><a className="dropdown-item hover:bg-slate-300" href="#">Online</a></li>
                      <li><a className="dropdown-item hover:bg-slate-300" href="#">Offline</a></li>
                  </ul>
              </div>
              <button className=' bg-white rounded-lg py-2 px-3 hover:bg-slate-300'>Login</button>
          </div>
      </div>
      <motion.div
      initial={{
          x: "-1500px"
      }}
      animate={{
        x: "0"
      }}
      transition={{
        duration: 1,
        delay: 0.6,
        ease: "easeOut"
      }}

      className='w-full mt-1 px-[40px]'>
          <div className='w-full bg-white h-[1px]'></div>
      </motion.div>
    </>
  );
}

export default Home;

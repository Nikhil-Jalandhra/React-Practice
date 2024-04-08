import React from 'react';
import logo from "../Images/logo.png"

function Home() {
  return (
    <div className='w-full h-screen bg-gray-900'>
      <div className='w-full h-[70px] bg-black flex'>
        <div className=' flex w-[70%] items-center justify-end pe-[80px]'>
            <img className=' select-none w-[90px]' src={logo} alt="Logo" />
            <h1 className='text-[45px] text-red-600 font-extrabold uppercase'>Gaming-Hub</h1>
        </div>
        <div className='flex items-center flex-grow justify-end pe-[30px]'>
            <div class="dropdown mr-[20px]">
                <button class="btn bg-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Games
                </button>
                <ul class="dropdown-menu bg-slate-100 ">
                    <li><a class="dropdown-item hover:bg-slate-300" href="#">Single-Player</a></li>
                    <li><a class="dropdown-item hover:bg-slate-300" href="#">Multy-Player</a></li>
                    <li><a class="dropdown-item hover:bg-slate-300" href="#">Online</a></li>
                    <li><a class="dropdown-item hover:bg-slate-300" href="#">Offline</a></li>
                </ul>
            </div>
        <button className=' bg-white rounded-lg py-2 px-3 hover:bg-slate-300'>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

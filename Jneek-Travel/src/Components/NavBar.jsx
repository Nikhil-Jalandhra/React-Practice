import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <div>
      <div className=' absolute w-full text-white p-5 flex z-50'>
        <div className='flex'><a href="/"><img src={props.image} alt="image" className=' ms-16 w-[60px]' /></a><h1 className='text-black text-center ms-1 my-auto text-[25px] font-medium'>Jneek-Tarvel</h1></div>

        <div className='flex-1 '>
          <div className=' absolute right-[100px] flex' >
            <Link to="/"><button className=' rounded-[5px] text-center w-[70px] mt-2  me-[70px] h-[30px] font-medium text-[18px] cursor-pointer text-black hover:bg-green-900 hover:text-white' >Home</button></Link>
            <Link to="/about"><button className=' rounded-[5px] text-center w-[70px] mt-2  me-[70px] h-[30px] font-medium text-[18px] cursor-pointer text-black hover:bg-green-900 hover:text-white' >About</button></Link>
            <button className=' rounded-[5px] text-center w-[90px] mt-2  me-[70px] h-[30px] font-medium text-[18px] cursor-pointer text-black hover:bg-green-900 hover:text-white' >Packages</button>
            <Link to="/contact"><button className=' rounded-[5px] text-center w-[90px] mt-2  me-[10px] h-[30px] font-medium text-[18px] cursor-pointer text-black hover:bg-green-900 hover:text-white' >Contact</button></Link>
          
          </div>
        </div>

      </div>
    </div>
  );
}

export default NavBar;

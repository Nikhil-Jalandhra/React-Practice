import React from 'react';
import banner1 from "../Images/banner1.jpg"
import banner2 from "../Images/banner2.jpg"
import banner3 from "../Images/banner3.jpg"
import banner4 from "../Images/banner4.jpg"
import banner5 from "../Images/banner5.jpg"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Slider() {

    const banner = [
        banner1,
        banner2,
        banner3,
        banner4,
        banner5
    ]

  return (
    <div>
      <div className='flex w-full overflow-x-auto px-16 py-4'>
        <div className='text-[50px] absolute' ><IoIosArrowBack/></div>
        {banner.map((item,index)=> (
            <div key={index} className=' min-w-full h-[500px] mr-[20px]'>
                <img src={item} alt="item" className='w-full h-full object-fill object-left-top rounded-lg' />
            </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;

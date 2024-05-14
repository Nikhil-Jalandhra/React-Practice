import {React, useRef} from 'react';
import banner1 from "../Images/banner1.jpg"
import banner2 from "../Images/banner2.jpg"
import banner3 from "../Images/banner3.jpg"
import banner4 from "../Images/banner4.jpg"
import banner5 from "../Images/banner5.jpg"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const screenWidth = window.innerWidth

function Slider() {

    const banner = [
        banner1,
        banner2,
        banner3,
        banner4,
        banner5
    ]

    const elementRef = useRef();

    const rightSlide = (element) =>{
      element.scrollLeft+=screenWidth-90
    }
    
    const leftSlide = (element) =>{
      element.scrollLeft-=screenWidth-90
    }

  return (
    <div>
        <div className=' hidden md:block text-[50px] mx-[80px] absolute lg:mt-[185px] md:mt-[125px]' 
        onClick={()=>leftSlide(elementRef.current)} ><IoIosArrowBack/></div>
        <div className=' hidden md:block text-[50px] mx-[80px] absolute lg:mt-[185px] md:mt-[125px] right-0' 
        onClick={()=>rightSlide(elementRef.current)} ><IoIosArrowForward/></div>
      <div className='flex w-full overflow-x-auto px-[50px] py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
        {banner.map((item,index)=> (
            <div key={index} className=' shadow-xl shadow-black rounded-lg min-w-full lg:h-[400px] md:h-[300px] mr-[20px]'>
                <img src={item} alt="item" className='w-full h-full object-fill object-left-top rounded-lg' />
            </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;

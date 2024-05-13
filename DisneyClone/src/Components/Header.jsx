import { React, useState} from 'react';
import logo from "../Images/logo.png"
import avatar from "../Images/avatar.jpg"
import { ImHome } from "react-icons/im";
import { BsSearch } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { RiMovie2Fill } from "react-icons/ri";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";

function Header() {

    const menue = [
        {
            name: "Home",
            slug: "#",
            icon: <ImHome/>
        },
        {
            name: "Search",
            slug: "#",
            icon: <BsSearch/>
        },
        {
            name: "WatchList",
            slug: "#",
            icon: <FaPlus/>
        },
        {
            name: "Originals",
            slug: "#",
            icon: <IoStar/>
        },
        {
            name: "Movies",
            slug: "#",
            icon: <RiMovie2Fill/>
        },
        {
            name: "Series",
            slug: "#",
            icon: <PiTelevisionSimpleBold/>
        },
    ]

    const [show, setShow] = useState(false);

    const menuebox = () => {
        setShow(!show)

    }

  return (
    <div className=' flex w-full h-[100px] text-white'>
        <div className='h-full w-[250px] flex items-center pl-[40px] mr-[25px]'>
            <img src={logo} alt="Logo" className='w-[70px]' />
        </div>

        {/* Following Div For Larger Screen */}

        <div className='hidden lg:flex w-full h-full items-center justify-between'>
            {menue.map((item,index)=>(
                <a key={index} href={item.slug}>
                    <p className='flex items-center
                       font-semibold text-[18px] cursor-pointer border-[#16181f]
                       border-b-[2px] hover:border-white mr-[20px]'>
                        <span className='mr-[5px] text-16px]'>{item.icon}</span>{item.name}
                    </p>
                </a>
                ))}
        </div>

        {/* Following Div For Medium Screen */}

        <div className=' lg:hidden hidden md:flex h-full items-center w-full justify-between'>
            {menue.map((item,index)=>(
                <a key={index} href={item.slug}>
                    <p className='flex items-center
                    cursor-pointer'>
                        <span className='mr-[5px] text-16px]'>{item.icon}</span>
                    </p>
                </a>
                ))}
        </div>

        <div className='lg:w-1/2 md:w-1/2 w-full h-full flex items-center justify-end pr-[20px]'>
            <button 
            onClick={menuebox}
            className='mr-[20px] text-[25px] 
            lg:hidden md:hidden px-[2px] py-[10px]
             focus-within:border-[1px] border-gray-500 rounded-sm'>
                <BsThreeDotsVertical />
            </button>
            <div className='w-[45px]  rounded-full overflow-hidden'>
                <img src={avatar} alt="" className='' />
            </div>
        </div>

        {show && <div 
        className='w-full h-[300px] opacity-[0.7]  
        lg:hidden md:hidden bg-[#2a2c35] absolute
        mt-[80px] px-[50px] py-[20px] flex flex-col justify-around'>
                {menue.map((item,index)=>(
                    <a key={index} href={item.slug}>
                        <p className='flex items-center
                          font-semibold text-[18px] cursor-pointer border-[#16181f]
                          border-b-[2px] hover:border-white mr-[20px]'>
                          <span className='mr-[5px] text-16px]'>{item.icon}</span>{item.name}
                        </p>
                     </a>
                ))}
        </div> }

        

    </div>
  );
}

export default Header;

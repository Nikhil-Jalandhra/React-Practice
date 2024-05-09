import React from 'react';
import logo from "../Images/logo.png"
import avatar from "../Images/avatar.jpg"
import { ImHome } from "react-icons/im";
import { BsSearch } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { RiMovie2Fill } from "react-icons/ri";
import { PiTelevisionSimpleBold } from "react-icons/pi";

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

  return (
    <div className=' flex w-full h-[80px] text-white'>
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
            <div className='w-[45px]  rounded-full overflow-hidden'>
                <img src={avatar} alt="" className='' />
            </div>
        </div>
    </div>
  );
}

export default Header;

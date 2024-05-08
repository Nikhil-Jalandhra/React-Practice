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
    <div className=' flex w-full h-[80px] items-center text-white'>
            <img src={logo} alt="Logo" className='h-[50px] mx-[35px]' />
        <div className='flex'>
            {menue.map((item,index)=>(
                <a key={index} href={item.slug}>
                    <p className=' ml-[50px] flex items-center
                       font-bold text-[18px] cursor-pointer border-[#16181f]
                       border-b-[2px] hover:border-white'>
                        <span className='mr-[10px] text-16px]'>{item.icon}</span>{item.name}
                    </p>
                </a>
                ))}
        </div>
        <div className='w-[45px]  rounded-full overflow-hidden ml-[480px]'>
            <img src={avatar} alt="" className='' />
        </div>
    </div>
  );
}

export default Header;

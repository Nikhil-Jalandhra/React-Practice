import React from 'react';
import logo from "../Images/logo.png"

function Header() {

    const menue = [
        {
            name: "Nikhil",
            slug: "#"
        },
        {
            name: "Nikhil",
            slug: "#"
        },
    ]

  return (
    <div className=''>
      <img src={logo} alt="Logo" className='w-[100px]' />
      {menue.map((item,index)=>(
        <a key={index} href={item.slug}><p>{item.name}</p></a>
      ))}
    </div>
  );
}

export default Header;

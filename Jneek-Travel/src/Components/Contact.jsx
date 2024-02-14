import React from 'react';

function Contact(props) {
  return (
    <div>
      <div className=' w-full h-screen relative'>
        <img src={props.image2} className=' w-screen h-screen object-cover' />

      <div className=' absolute top-[200px] left-[200px] font-sans font-medium text-white'>
        <h1 className=' text-[45px]'>LIFE IS</h1>
        <h1 className=' text-[60px] tracking-[20px] font-bold'>SHORT</h1>
        <h1 className=' text-[45px]'>AND THE</h1>
        <h1 className=' text-[60px] tracking-[20px] font-bold'>WORLD</h1>
        <h1 className=' text-[45px]'>IS WIDE</h1>
      </div>

      <div className=' absolute top-[150px] right-[220px] rounded-3xl backdrop-filter backdrop-blur-[5px] border-black border-[0.1px] p-[35px]'>
        <div className=' flex items-center flex-col'>
        <img src={props.image3} className=' w-[150px]' alt="" />
        <div className=' flex flex-col items-center'>
        <h1>Sign in with LinkedIn to get started.</h1>
        <input className='mt-[10px] h-[20px] p-[20px] w-[350px] rounded-lg outline-none border-none bg-gray-200 placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-300' type="text" placeholder='Email or username' />
        <input className='mt-[25px] h-[20px] p-[20px] w-[350px] rounded-lg outline-none border-none bg-gray-200 placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-300' type="password" placeholder='Password' />
        <button className=' mt-[25px] h-[50px] w-[350px] rounded-lg outline-none border-none bg-green-900 text-white hover:bg-green-700'>Sign-in</button>
        <div className='flex'>
        <input type="checkbox" className=' cursor-pointer me-[6px] w-[15px]' />
        <h1>Keep me signed in</h1>
        </div>
        </div>
        </div>
      </div>
      </div>

    </div>
  );
}

export default Contact;

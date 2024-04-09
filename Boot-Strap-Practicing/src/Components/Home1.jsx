import React from 'react';

function Home1() {

    const images = [
        "../Images/game1.jpg",
        "../Images/game2.jpg",
        "../Images/game3.jpg",
        "../Images/game4.jpg",
        "../Images/game5.jpg",
    ]

  return (
    <>
     <div className='w-full h-screen bg-black flex justify-center pt-[40px]'>
        <div className='w-[850px] h-[450px] bg-gray-700 rounded-xl overflow-hidden' >
            <div className='w-full h-full'>
                <img src={images[1]} alt="Read Dead 2" />
            </div>
        </div>
     </div> 
    </>
  );
}

export default Home1;

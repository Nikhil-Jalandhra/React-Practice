import React from 'react';

function About(props) {
  return (
    <div>

      <div className=' w-full h-screen relative'>
        <div className=' w-[900px] h-[300px] overflow-hidden'>
            <img className=' w-full h-full' src={props.about} alt="" />
        </div>
        <div className=' w-[1000px] h-[300px] overflow-hidden skew-x-12 skew absolute top-[0px]'>
            <img className=' w-full h-full z-200' src={props.about} alt="" />
        </div>

        <div className=' flex w-[600px] h-[300px] absolute top-0 right-0 text-gray-300 bg-[#144251] -z-10'>
            <h1 className=' m-auto text-[70px] font-extrabold'>About Us</h1>
        </div>

        <div className=' w-full h-[420px] bg-gray-300 flex'>
            <div className=' w-[750px] flex'>
                <div className=' w-[500px] m-auto text-center'>
                    <h1 className='text-[30px] font-bold'><i class="fa-solid fa-bullseye"></i> Our Vision</h1>
                    <p>Welcome to <span className='font-bold'>Jneek Travels</span>, where every journey is an adventure waiting to unfold. We are passionate about creating unforgettable travel experiences that go beyond the ordinary. As avid explorers ourselves, we understand the profound impact that travel can have on one's life, and we are dedicated to curating journeys that inspire, enrich, and create lasting memories.</p>

                    <p>At <span className='font-bold'>Jneek Travels</span>, our vision is simple – to be your trusted companion in crafting remarkable travel stories. We believe that travel is not just about reaching a destination; it's about embracing the journey and discovering the world in all its diversity. Our goal is to ignite the spirit of wanderlust within you and provide the tools and resources to turn your travel dreams into reality.</p>

                </div>
            </div>
            <div className=' flex flex-1'>

                <div className='w-[400px] m-auto'>

                    <h1 className=' text-[30px] font-bold'>What Sets Us Apart</h1>
            
                    <p className=' mt-[10px]'><i className="fa-solid fa-circle"></i> <span className=' font-semibold'>Passionate Travel Experts:</span> Our team consists of passionate travel enthusiasts who bring a wealth of experience and knowledge to help you plan the perfect trip.</p>
                    <p className=' mt-[10px]'><i className="fa-solid fa-circle"></i> <span className=' font-semibold'>Curated Experiences:</span> We handpick and curate unique travel experiences, ensuring that each journey is tailored to exceed your expectations.</p>
                    <p className=' mt-[10px]'><i className="fa-solid fa-circle"></i> <span className=' font-semibold'>Global Network:</span> With a vast network of trusted partners and suppliers worldwide, we offer you access to the best destinations, accommodations, and activities.</p>
                
                </div>

            </div>
      </div>
      </div>
      
    </div>
  );
}

export default About;

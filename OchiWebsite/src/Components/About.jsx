import React from 'react';

function About() {
  return (
    <div>
      <div className='w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-[#000]'>
        <h1 className='font-[Neue Montreal] text-[3vw] leading-[4.5vw] tracking-tight'>
            Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className=' flex gap-5 w-full border-t-[1px] mt-20 pt-10 border-[#91a549]'>
            <div className="w-1/2">
                <h1 className=' text-7xl'>Our approach :</h1>
                <button className=' flex gap-10 items-center px-10 py-5 bg-zinc-900 mt-10 rounded-full text-white uppercase'>Read More
                <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 rounded-3xl h-[70vh] bg-[#b3cd57] overflow-hidden'>
                <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="image" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;

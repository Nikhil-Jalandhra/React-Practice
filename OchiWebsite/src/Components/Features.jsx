import React from 'react';

function Features() {
  return (
    <div>
      <div className='w-full py-10'>
        <div className=' w-full px-20 border-b-[1px] pb-20 border-zinc-700 '>
            <h1 className=' text-6xl font=[Neue Montreal] tracking-tight'>Featured Projects</h1>
        </div>

        <div className="cards w-full flex gap-5 p-10">
                <div className=" relative cardContaier w-1/2 h-[75vh] bg-red-500">
                    <h1 className=' text-[#cdea68] -translate-x-1/2 top-1/2 -translate-y-1/2 absolute left-full z-[9] text-8xl font-semibold leading-none tracking-tighter font-[Founders Gortesk]'>FYDE</h1>
                    <div className="cardImg w-full h-full rounded-xl overflow-hidden hover:scale-[0.9]">
                        <img className=' w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                    
                </div>
                <div className=" relative cardContaier w-1/2 h-[75vh] bg-red-50 rounded-xl overflow-hidden">
                <h1 className=' text-[#cdea68] translate-x-1/2 top-1/2 -translate-y-1/2 absolute right-full z-[9] text-8xl font-semibold leading-none tracking-tighter font-[Founders Gortesk]'>{"Vise".split("").map((item, index)=><span key={index}>{item}</span>)}</h1>
                    <div className="cardImg w-full h-full rounded-xl overflow-hidden hover:scale-[0.9]">
                        <img className=' w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </div>
            </div>

      </div>
    </div>
  );
}

export default Features;

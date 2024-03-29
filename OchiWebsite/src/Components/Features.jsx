import { motion } from 'framer-motion';
import { Power4 } from 'gsap';
import React, {useState} from 'react';

function Features() {
  const [isHovering, setisHovering] = useState(false);
  const [leftisHovering, setleftisHovering] = useState(false);
  return (
    <div>
      <div className='w-full py-10'>
        <div className=' w-full px-20 border-b-[1px] pb-20 border-zinc-700 '>
            <h1 className=' text-6xl font=[Neue Montreal] tracking-tight'>Featured Projects</h1>
        </div>

        <div className="cards w-full flex gap-5 p-10">
                <div
                onMouseEnter={() => setisHovering(true)}
                onMouseLeave={() => setisHovering(false)}
                 className=" relative cardContaier w-1/2 h-[75vh] rounded-xl">
                    <h1 className=' text-[#cdea68] -translate-x-1/2 top-1/2 -translate-y-1/2 absolute left-full z-[9] text-8xl font-semibold leading-none tracking-tighter flex overflow-hidden font-[Founders Gortesk]'>{"FYDE".split("").map((item, index)=><motion.span
                    initial={{y: "100%"}}
                    animate={isHovering ? {y: 0}: {y: "100%"}}
                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*.08}}
                    className='inline-block' key={index}>{item}</motion.span>)}</h1>
                    <div className="cardImg w-full h-full rounded-xl overflow-hidden ">
                        <img className=' w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                    
                </div>
                <div 
                onMouseEnter={() => setleftisHovering(true)}
                onMouseLeave={() => setleftisHovering(false)}
                className=" relative cardContaier w-1/2 h-[75vh] rounded-xl ">
                <h1 className=' text-[#cdea68] translate-x-1/2 top-1/2 -translate-y-1/2 absolute right-full  text-8xl font-semibold leading-none flex overflow-hidden tracking-tighter font-[Founders Gortesk]'>{"VISE".split("").map((item, index)=><motion.span
                    initial={{y: "100%"}}
                    animate={leftisHovering ? {y: 0}: {y: "100%"}}
                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*.08}}
                    className='inline-block' key={index}>{item}</motion.span>)}</h1>
                    <div className="cardImg w-full h-full rounded-xl overflow-hidden">
                        <img className=' w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </div>
            </div>

      </div>
    </div>
  );
}

export default Features;

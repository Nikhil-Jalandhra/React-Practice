import React from 'react';
import disney from "../png/disney.png"
import pixar  from "../png/pixar.png"
import marvel from "../png/marvel.png"
import starwar  from "../png/starwar.png"
import nationalG from "../png/nationalG.png"
import disneyMp4 from "../videos/disney.mp4"
import pixarMp4  from "../videos/pixar.mp4"
import marvelMp4 from "../videos/marvel.mp4"
import starwarMp4  from "../videos/starwar.mp4"
import nationalGMp4 from "../videos/nationalG.mp4"

function ProductionSection() {

    const productionItem = [
        {
            id: 1,
            image: disney,
            video: disneyMp4
        },
        {
            id: 2,
            image: pixar,
            video: pixarMp4
        },
        {
            id: 3,
            image: marvel,
            video: marvelMp4
        },
        {
            id: 4,
            image: starwar,
            video: starwarMp4
        },
        {
            id: 5,
            image: nationalG,
            video: nationalGMp4
        },
    ]
    
  return (
    <div className='flex py-[20px] gap-2 md:gap-5 px-[50px]'>
      {productionItem.map((item)=>(
      <div key={item.id} className=' border-gray-700 border-[3px] bg-gradient-to-t from-[#131520] to-[#232232]
       rounded-lg shadow-xl shadow-black hover:scale-110 hover:bg-none
       transition-all duration-300 ease-in-out cursor-pointer relative'>
           <img src={item.image} alt="" className='absolute top-0' />
            <video src={item.video} muted autoPlay loop playsInline  
            className='opacity-0 hover:opacity-100 rounded-lg' 
            ></video>
      </div>
      ))}
    </div>
  );
}

export default ProductionSection;

import React from 'react';

function Home(props) {
  return (
    <div>
      <div className=' w-full h-screen relative'>
        <img className='w-full h-screen' src={props.home} />

        <div className=' absolute top-[230px] left-[120px] text-[60px] text-white'>

        <h1>The <span className=' font-bold text-green-400'>World</span></h1>
        <h1 className=' -mt-[30px]'>is Yours to Explore</h1>
        <h1 className=' text-[20px] mt-3'>"Dive into a world of endless possibilities on our travel website<br/>&nbsp;&nbsp;where variety meets adventure at every click."</h1>

        <button className='bg-green-900 hover:bg-green-700 px-[10px] py-[12px] rounded-lg text-[20px]'>Explore Packages</button>

        </div>

      </div>
    </div>
  );
}

export default Home;

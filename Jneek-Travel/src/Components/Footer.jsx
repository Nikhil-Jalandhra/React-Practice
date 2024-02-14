import React from 'react';

function Footer() {

  
  return (
    <div>
      <div className=' w-full h-[200px] bg-green-900 text-white p-[10px]'>
        <div className=' mx-auto w-[500px] flex flex-col text-center'>

            <div className=' mt-[20px] font-serif text-[20px] '><h1>Nikhil-Jalandhra, Web Designer</h1></div>
            <div className=' opacity-[0.5] text-[14px]'><h1>Exellence in digital creation</h1></div>

            <div className=' text-[25px]  flex space-x-7 mt-[10px] mx-auto'>
                <a target='_blank' href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                <a target='_blank' href="https://github.com/Nikhil-Jalandhra"><i className="fa-brands fa-github"></i></a>
                <a target='_blank' href="https://x.com/jneek_36?t=0_zLvEpvOgBGeL_iEgzcJA&s=09"><i className="fa-brands fa-twitter "></i></a>
                <a target='_blank' href="https://www.linkedin.com/in/nikhil-jalandhra-1479742b0/"><i className="fa-brands fa-linkedin "></i></a>
                <a target='_blank' href=""><i className="fa-brands fa-discord "></i></a>
            </div>

            <h1 className='mt-[10px] text-[15px] opacity-[0.6]'><i className="fa-regular fa-copyright"></i> CopyRight , Privacy & Legal</h1>

        </div>
        </div>
    </div>
  );
}

export default Footer;

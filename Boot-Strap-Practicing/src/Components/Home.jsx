import React from 'react';
import game1 from "../Images/game1.jpg"
import game2 from "../Images/game2.jpg"
import game3 from "../Images/game3.jpg"
import game4 from "../Images/game4.jpg"
import game5 from "../Images/game5.jpg"
import { IoCaretDownCircle } from "react-icons/io5";
import {motion} from 'framer-motion'

function Home() {

    

  return (
    <>
        <div className='w-full h-screen bg-black flex flex-col items-center pt-[40px]'>
            <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 1.5, delay: 1.5}}
            className='w-[850px] h-[450px] bg-gray-700 rounded-xl overflow-hidden'>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="1500">
                            <img src={game5} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src={game2} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src={game3} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src={game4} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src={game1} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </motion.div>
            <motion.div
            initial={{ y: "10px" }}
            animate={{ y: "0px" }}
            transition={{duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className=' text-gray-400 flex items-center mt-3 '>
                <h1>Scroll Down</h1>
                <IoCaretDownCircle className='ml-1 text-white text-[20px]' />
            </motion.div>

        </div> 
    </>
  );
}

export default Home;

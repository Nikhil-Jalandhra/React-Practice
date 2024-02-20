import React from 'react';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Marque from './Components/Marque';
import About from './Components/About';
import Eyes from './Components/Eyes';
import Features from './Components/Features';
import Cards from './Components/Cards';
import Footers from './Components/Footers';
import LocomotiveScroll from 'locomotive-scroll';


function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <div className='w-full min-h-screen text-white bg-zinc-900'>
        <Navbar/>
        <LandingPage/>
        <Marque/>
        <About/>
        <Eyes/>
        <Features/>
        <Cards/>
        <Footers/>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Marque from './Components/Marque';
import About from './Components/About'

function App() {
  return (
    <div>
      <div className='w-full min-h-screen text-white bg-zinc-900'>
        <Navbar/>
        <LandingPage/>
        <Marque/>
        <About/>
      </div>
    </div>
  );
}

export default App;

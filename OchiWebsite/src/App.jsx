import React from 'react';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Marque from './Components/Marque';


function App() {
  return (
    <div>
      <div className='w-full min-h-screen text-white bg-zinc-900'>
        <Navbar/>
        <LandingPage/>
        <Marque/>
      </div>
    </div>
  );
}

export default App;

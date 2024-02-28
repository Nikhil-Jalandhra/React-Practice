import { useState, useEffect } from 'react';
import { UseDispatch } from 'react-redux';
import './App.css';
import authService from "./appwrite/auth"
import {login, logout} from './store/authSlice'
import { Header, Footer } from './components'

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = UseDispatch();

  useEffect(()=> {
    authService.getCurrentUser()
    .then((useData)=>{
      if (useData) {
        dispatch(login({useData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className=' min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <Footer />
        <main></main>
      </div>
    </div>
  ) : null

}

export default App

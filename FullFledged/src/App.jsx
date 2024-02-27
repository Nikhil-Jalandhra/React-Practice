import { useState, useEffect } from 'react';
import { UseDispatch } from 'react-redux';
import './App.css';
import authService from "./appwrite/auth"

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = UseDispatch();

  useEffect(()=> {
    authService.getCurrentUser()
    .then((useData)=>{})
    .finally()
  }, [])

  return (
    <>
      <h1>Hitesh Choudhary</h1>
    </>
  )
}

export default App

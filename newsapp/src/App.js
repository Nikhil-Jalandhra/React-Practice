import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import React, {useState} from 'react';

const App =() => {
  const apiKey = "023166db47d44e188e17bd2798aa1b4e";

  const pageSize = 5;
  const [progress, setProgress] = useState(0)

    return (
      <>

      <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
      <Routes>
          <Route path="/" element={<News setProgress={setProgress}  apiKey={apiKey}  key="general" pageSize={pageSize} category="general" />} ></Route>
          <Route path="/business" element={<News setProgress={setProgress}  apiKey={apiKey}  key='business' pageSize={pageSize} category="business" />} ></Route>
          <Route path="/entertainment" element={<News setProgress={setProgress}  apiKey={apiKey}  key='entertainment' pageSize={pageSize} category="entertainment" />} ></Route>
          <Route path="/health" element={<News setProgress={setProgress}  apiKey={apiKey}  key='health' pageSize={pageSize} category="health" />} ></Route>
          <Route path="/science" element={<News setProgress={setProgress}  apiKey={apiKey}  key='science' pageSize={pageSize} category="science" />} ></Route>
          <Route path="/sports" element={<News setProgress={setProgress}  apiKey={apiKey}  key='sports' pageSize={pageSize} category="sports" />} ></Route>
          <Route path="/technology" element={<News setProgress={setProgress}  apiKey={apiKey}  key='technology' pageSize={pageSize} category="technology" />} ></Route>
        </Routes>
      </Router>
      </>
    );
  }

  export default App;

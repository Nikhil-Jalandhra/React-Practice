import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NavBar from "./Components/NavBar"
import image from "./images/travel.png"
import image2 from "./images/contact.jpg"
import about from "./images/about.jpg"
import home from "./images/home.jpg"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Home from "./Components/Home"

function App() {

  

  return (
    <>
    <div>
      {/* <UserContextProvider></UserContextProvider> */}
      <Router>
      <NavBar image={image}/>
      <Routes>
            <Route path="/" element={<Home home={home}/>}>
            </Route>
            <Route path="/about" element={<About about={about} />}>
            </Route>
            <Route path="/contact" element={<Contact image2={image2} image3={image}/>}>
            </Route>
      </Routes>
      
      {/*  */}
      <Footer/>
      </Router>
    </div>
    </>
  )
}
import About from "./Components/About";

export default App

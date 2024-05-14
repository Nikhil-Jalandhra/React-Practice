import Header from "./Components/Header"
import Slider from "./Components/Slider"
import ProductionSection from "./Components/ProductionSection"

function App() {

  return (
    <>
      <div className=" h-screen bg-[#131520] text-white">
        <Header/>
        <Slider/>
        <ProductionSection/>
      </div>
    </>
  )
}

export default App

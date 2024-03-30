import './App.css'
import LineChart from './components/LineChart/LineChart'
import Navbar from './components/Navbar/Navbar'
import Navmenu from './components/Navigation/Navmenu'
import Phones from './components/Phones/Phones'
import PriceItem from './components/Price/PriceItem'

function App() {

  return (
    <>
      <div className="w-full md:w-8/12 mx-auto">
        <Navbar></Navbar>
        <Navmenu></Navmenu>
      </div>
      <PriceItem></PriceItem>
      <Phones></Phones>
      <LineChart></LineChart>

    </>
  )
}

export default App

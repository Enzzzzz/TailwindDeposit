import { FirstCard } from "../templates/cards/firstCard";
import Navbar from "../templates/navbars/navbar";



function Home() {
  return (
    <div className="home">
      <div className="bg-blue-gradient w-full">
      <Navbar/>
      </div>
      <div id="firstLayer" className="bg-blue-gradient w-full h-full">
        <div className="section border border-b-1 border-black/50">
          <FirstCard/>
        </div>

        <div id="secondLayer" className="section bg-blue-gradient-reverse shadow-md">
          
        </div>

      </div>
    </div>
  )
}

export default Home

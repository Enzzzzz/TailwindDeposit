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
          <div className="absolute top-36 left-16 w-5 h-5 rounded-full neon-red animate-pulse bg-red-600">
            <h2 className="w-28 ml-6 mt-0.5 text-red-600 text-xs">EM CONSTRUÇÃO</h2>
          </div>
          <h1 className="flex items-center justify-center text-4xl mt-20 font-bold text-white">Primeiro Card</h1>
          <FirstCard/>
          <h1 className="flex items-center justify-center text-4xl -mt-8 font-poppins text-white w-[45%] py-2 px-5 rounded-3xl bg-secondary neon-blue cursor-pointer hover:bg-primary/50"> IR PARA O CÓDIGO</h1>
        </div>

        <div id="secondLayer" className="section bg-blue-gradient-reverse shadow-md">
          
        </div>

      </div>
    </div>
  )
}

export default Home

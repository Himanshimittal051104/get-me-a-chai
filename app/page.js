import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white text-center">
      <div >
        <div className=" flex justify-center pt-10 text-3xl font-bold mb-3">
          Get Me a Chai
          <img src="./tea.svg" alt="" className="mx-3 h-10" />
        </div>
        <div className="m-5">A crowdfunding platform for creators to fund their projects</div>
        <div className="m-5">A place where your fans can buy you a chai.Unleash the power of your fans and get your projects funded </div>
        <div className="m-5">
          <button className='bg-gradient-to-t from-[#7d3bef] from-0% to-[#6786ff] px-4 mx-2 rounded-md py-1'>Start Here</button>
          <a  href="#learnmore">
          <button className='bg-gradient-to-t from-[#7d3bef] from-0% to-[#6786ff] px-4 mx-2 rounded-md py-1 '>Read more</button>
          </a>
        </div>
      </div>
      <div className="bg-slate-700 w-[98.5vw] h-1 mt-24"></div>
      <div>
        <div className="pt-10 text-2xl font-bold">Your fans can buy you a Chai</div>
        <div className="flex justify-evenly mt-5 text-center">
          <div >
            <div className="w-12 h-12 rounded-full bg-slate-400 justify-center my-5 overflow-hidden mx-auto"> <img src="./fans.svg" alt="" className="h-12" /></div>
            <div>Fans want to help</div>
            <div>Fans are available to support you</div>
          </div>
          <div className="justify-center">
            <div className="w-12 h-12 rounded-full bg-slate-400 justify-center my-5 mx-auto"> <img src="./coins.svg" alt="" /></div>
            <div>Fans want to contribute</div>
            <div>Fans are available to support you</div>
          </div>
          <div>
            <div className="w-12 h-12 rounded-full bg-slate-400 justify-center  my-5 overflow-hidden mx-auto"><img src="./collaboration.svg" alt="" /> </div>
            <div>Fans want to collaborate</div>
            <div>Fans are available to support you</div>
          </div>
        </div>
      </div>
      <div className="bg-slate-700 w-[98.5vw] h-1 mt-24"></div>
      <div id="learnmore" className="min-h-[80vh]">
        <div className="text-white text-center mt-10 text-2xl font-bold">Learn more about us</div>
        <div className="mt-10 pb-24">
        <a href="https://www.instagram.com/reel/CvP3HEXrHgc/?utm_source=ig_web_copy_link" className="font-bold text-blue-700 hover:font-extrabold visited:text-purple-800">Learn more</a>
        </div>
      </div>
    </div>
  );
}
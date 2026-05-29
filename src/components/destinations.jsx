import Destination from "./destination.jsx";

export default function Destinations() {
  return (
    <div className="flex flex-col items-center justify-between gap-5 p-15 h-screen">
      <div className="flex items-center justify-between w-full ">
        <h2 className="text-5xl">
          Curated <span className="italic font-medium">Destinations</span> for the<br /><span className="italic font-medium">Discerning</span> Traveler 
        </h2>
        <div className="flex ">
          <button className="flex justify-center items-center m-1 p-2 rounded-full cursor-pointer">
            <img className="w-4 inline-block" src="/assets/imgs/icons8-arrow-100 (1).png" alt="Arrow" />
          </button>
          <button className="flex justify-center items-center m-1 p-2 rounded-full cursor-pointer">
            <img className="w-4 inline-block" src="/assets/imgs/icons8-arrow-100.png" alt="Arrow" />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <Destination background="/public/assets/imgs/XCEDJfotl3bTo1jvU9wZ9s7IsGY.avif" city="Paris" title="City of Light" description="Experience the romance of Paris with our curated tours." />
      </div>
    </div>
  )
}
import  useInView  from "../hooks/useInView";

import Service from "./service";

const dark = "bg-[#141414] text-white";
const darkImg = "flex justify-center items-center border border-[#ffffff30] rounded-full bg-[#ffffff40] m-5";
const darkAnim = "animate-[fadeLeft_0.7s_ease-out_forwards]";

const light = "bg-[#f3f3f3]";
const lightImg = "flex justify-center items-center border border-black rounded-full m-5";
const lightAnim = "animate-[fadeRight_0.7s_ease-out_forwards]";

export default function Services() {
  

  const { ref, isInView } = useInView(0.6);

  return (
    <div className=" flex px-10 h-screen items-center justify-center gap-10 bg-[#f3f3f3]" ref={ref}>
      <div className="flex flex-col gap-6">
        <h2 className={"text-6xl h-31" + (isInView ? " animate-[fadeDownBlur_0.7s_ease-out_forwards]" : " opacity-0")}>Our true <span className="font-playfair italic">beliefs</span><br /> for <span className="font-playfair italic">your</span> benefits</h2>
        
        <Service
        img="/public/assets/imgs/vehicle.png"
        
        bg={dark}
        
        imgBg={darkImg}

        animation={isInView ? darkAnim : "opacity-0"}
        
        title="Vehicles"
        
        description="A wide range of modern vehicles, including luxury options, ensuring safe, comfortable, and reliable transportation for every journey." />

        <Service
        img="/public/assets/imgs/iItineraries.png"
        
        bg={light}
        
        imgBg={lightImg}
        
        animation={isInView ? lightAnim : "opacity-0"}
        
        title="Itineraries"
        
        description="Customized travel plans designed to match your budget, schedule, and interests, ensuring a smooth and unforgettable experience." />
        
        <Service
        img="/public/assets/imgs/jeep.png"
        
        bg={dark}
        
        imgBg={darkImg}

        animation={isInView ? darkAnim : "opacity-0"}
        
        title="Meet & Assist"
        
        description="Enjoy a warm airport welcome with our meet & assist service, ensuring a smooth, stress-free arrival and quick transfer." />
        
      </div>
      <div className="flex flex-col gap-6">
        <Service
        img="/public/assets/imgs/vehicle.png"
        
        bg={dark}
        
        imgBg={darkImg}

        animation={isInView ? darkAnim : "opacity-0"}
        
        title="Vehicles"
        
        description="A wide range of modern vehicles, including luxury options, ensuring safe, comfortable, and reliable transportation for every journey." />

        <Service
        img="/public/assets/imgs/iItineraries.png"
        
        bg={light}
        
        imgBg={lightImg}
        
        animation={isInView ? lightAnim : "opacity-0"}
        
        title="Itineraries"
        
        description="Customized travel plans designed to match your budget, schedule, and interests, ensuring a smooth and unforgettable experience." />
        
        <Service
        img="/public/assets/imgs/jeep.png"
        
        bg={dark}
        
        imgBg={darkImg}

        animation={isInView ? darkAnim : "opacity-0"}
        
        title="Meet & Assist"
        
        description="Enjoy a warm airport welcome with our meet & assist service, ensuring a smooth, stress-free arrival and quick transfer." />

        <Service
        img="/public/assets/imgs/iItineraries.png"
        
        bg={light}
        
        imgBg={lightImg}
        
        animation={isInView ? lightAnim : "opacity-0"}
        
        title="Itineraries"
        
        description="Customized travel plans designed to match your budget, schedule, and interests, ensuring a smooth and unforgettable experience." />
      </div>
    </div>
  )
}
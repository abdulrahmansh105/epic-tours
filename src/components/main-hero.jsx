import Header from "./header"

const playfair = "font-playfair italic font-semibold";

export default function MainHero() {
  return (
    <div className="bg-[url('/assets/imgs/upscaled-image(7).png')] bg-cover bg-center h-screen w-full">
      

      <div className="h-full flex flex-col justify-between">
        <Header />

        <div className="flex flex-col items-center text-center text-white">
          <h2 className="animate-[fadeUpBlur_1.8s_ease_forwards] text-6xl font-medium text-white leading-snug m-3">
            Embark on <span className={playfair}>journeys</span> <br />
            not <span className={playfair}>just</span> destinations <br />
            with <span className={playfair}>our trip</span>
          </h2>
        </div>
        <div className="flex justify-between items-center w-full px-10 py-8">
          <p className="text-lg text-white">
            Unlock the doors to diverse cultures,
            awe-inspiring <br />
            landscapes, and thrilling adventures with us.
          </p>
          <button
            className="group border border-white px-8 h-10 rounded-full flex items-center justify-center gap-4 text-sm font-bold text-white hover:invert hover:border-black hover:bg-black transition-all duration-300"
          >
            <span>
              Explore Now
            </span>

            <img
              className="w-4 invert transition-all duration-300"
              src="assets/imgs/Arrow.png"
              alt="Arrow"
            />
          </button>
        </div>
      </div>
      
    </div>
  )
}
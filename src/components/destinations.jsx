import Destination from "./destination.jsx";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

export default function Destinations() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    
  });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  const destinations = [

    {
      background: "/assets/imgs/XCEDJfotl3bTo1jvU9wZ9s7IsGY.avif",
      city: "Paris",
      title: "City of Light",
      description: "Experience the romance of Paris."
    },

    {
      background: "/assets/imgs/XCEDJfotl3bTo1jvU9wZ9s7IsGY.avif",
      city: "Rome",
      title: "Eternal City",
      description: "Discover ancient wonders."
    },

    {
      background: "/assets/imgs/XCEDJfotl3bTo1jvU9wZ9s7IsGY.avif",
      city: "Tokyo",
      title: "Tokyo Nights",
      description: "Explore modern Japan."
    },

    {
      background: "/assets/imgs/XCEDJfotl3bTo1jvU9wZ9s7IsGY.avif",
      city: "Dubai",
      title: "Luxury Escape",
      description: "Experience luxury travel."
    },

    {
      background: "/assets/imgs/XCEDJfotl3bTo1jvU9wZ9s7IsGY.avif",
      city: "London",
      title: "Royal Journey",
      description: "Explore royal elegance."
    },

    {
      background: "/assets/imgs/XCEDJfotl3bTo1jvU9wZ9s7IsGY.avif",
      city: "Santorini",
      title: "Ocean Dreams",
      description: "Beautiful sunsets and white villas."
    },

    {
      background: "/assets/imgs/XCEDJfotl3bTo1jvU9wZ9s7IsGY.avif",
      city: "Egypt",
      title: "Ancient Wonders",
      description: "Temples, pyramids and desert adventures."
    },

  ];

  return (
    <div className="flex flex-col justify-center gap-10 p-15 h-screen">

      <div className="flex items-center justify-between w-full">

        <h2 className="text-5xl">
          Curated <span className="italic font-medium">
            Destinations
          </span> for the <br />

          <span className="italic font-medium">
            Discerning
          </span> Traveler
        </h2>

        <div className="flex">

          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="flex justify-center items-center m-1 p-2 rounded-full cursor-pointer"
          >
            <img
              className="w-4"
              src="/assets/imgs/icons8-arrow-100 (1).png"
              alt="Prev"
            />
          </button>

          <button
            onClick={() => emblaApi?.scrollNext()}
            className="flex justify-center items-center m-1 p-2 rounded-full cursor-pointer"
          >
            <img
              className="w-4"
              src="/assets/imgs/icons8-arrow-100.png"
              alt="Next"
            />
          </button>

        </div>

      </div>

      <div
        ref={emblaRef}
        className="overflow-hidden w-full"
      >
        <div className="flex">

          {destinations.map((card, i) => (

            <div
              key={i}
              className="flex-[0_0_17rem]"
            >

              <Destination {...card} />

            </div>

          ))}

        </div>
      </div>

    </div>
  )
}
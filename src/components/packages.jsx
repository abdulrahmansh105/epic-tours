import Package from '/src/components/package.jsx'

import useInView from '/src/hooks/useInView.js'


export default function Packages() {
  const { ref, isInView } = useInView(0.15);

  return (
    <div className="flex flex-col items-center justify-center gap-5 p-15" ref={ref}>
      <div className="flex items-center justify-between w-full">
        <h2 className={"text-6xl text-black" + (isInView ? " animate-[fadeIn_0.7s_ease-out_forwards]" : " opacity-0")}>
          Must <span className="font-playfair italic font-medium">experience</span><br /> packages
        </h2>
        <div className="w-100 py-15">
          <p>Indulge in our carefully crafted packages to immerse you in the most captivating and transformative travel adventures.</p>
          <a href="#" className="text-black font-medium hover:underline">
            see All Packages <img className="w-4 inline-block" src="assets/imgs/Arrow.png" alt="Arrow" />
          </a>
        </div>
      </div>
      <div className="flex gap-5">
        <Package packLink="https://www.google.com"
          packImg="/assets/imgs/spencer-davis-ONVA6s03hg8-unsplash.jpg"
          packTitle="Amazing Trip to Paris"
          packDuration="5 Days, 4 Nights"
          packCost="$1,299" />
        <Package packLink="https://www.google.com"
          packImg="/assets/imgs/spencer-davis-ONVA6s03hg8-unsplash.jpg"
          packTitle="Amazing Trip to Paris"
          packDuration="5 Days, 4 Nights"
          packCost="$1,299" />
        <Package packLink="https://www.google.com"
          packImg="/assets/imgs/spencer-davis-ONVA6s03hg8-unsplash.jpg"
          packTitle="Amazing Trip to Paris"
          packDuration="5 Days, 4 Nights"
          packCost="$1,299" />
      </div>
      <div className="flex gap-5">
        <Package packLink="https://www.google.com"
          packImg="/assets/imgs/spencer-davis-ONVA6s03hg8-unsplash.jpg"
          packTitle="Amazing Trip to Paris"
          packDuration="5 Days, 4 Nights"
          packCost="$1,299" />
        <Package packLink="https://www.google.com"
          packImg="/assets/imgs/spencer-davis-ONVA6s03hg8-unsplash.jpg"
          packTitle="Amazing Trip to Paris"
          packDuration="5 Days, 4 Nights"
          packCost="$1,299" />
        <Package packLink="https://www.google.com"
          packImg="/assets/imgs/spencer-davis-ONVA6s03hg8-unsplash.jpg"
          packTitle="Amazing Trip to Paris"
          packDuration="5 Days, 4 Nights"
          packCost="$1,299" />
      </div>
    </div>
    
  )
}
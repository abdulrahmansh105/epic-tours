import useInView from "/src/hooks/useInView.js";

export default function TheArtOf() {
  const { ref, isInView } = useInView(0.7);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#f1f1f1c2]" ref={ref}>
      <h2 className={"text-8xl font-cormorant text-center " + (isInView ? " animate-[fadeUpBlur_1.2s_ease-out_forwards]" : " opacity-0")}>

        The Art of <br /><span className="font-serif italic">Tailored</span> Travel
      </h2>
      <hr className={"border-gray-300 w-100 m-5" + (isInView ? " animate-[expendWidth_2s_ease-out_forwards]" : " opacity-0")} />
      <p className={"text-lg text-center text-gray-700 max-w-143" + (isInView ? " animate-[fadeUp_2s_ease-out_forwards]" : " opacity-0")}>Itinerarios personalizados para explorar el mundo de la manera que mejor se adapte a sus intereses.</p>

    </div>
  )
}
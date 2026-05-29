import useInView from "/src/hooks/useInView.js";

export default function Embark() {
  const { ref, isInView } = useInView(0.6);

  return (
    <div className="flex flex-col items-center justify-center gap-5 p-10 h-[120vh] bg-[#f1f1f165]" ref={ref}>
      <div>
        <h2 className={"text-[80px] text-black " + (isInView ? " animate-[fadeDownBlur_0.7s_ease-out_forwards]" : " opacity-0")}>Ready to <span className="font-playfair italic"> embark </span> </h2>
        <h2 className={"text-[80px] text-black h-20 flex justify-center items-center mb-7 " + (isInView ? " animate-[fadeUpBlur_0.7s_ease-out_forwards]" : " opacity-0")}> on a<span className="font-playfair italic">&nbsp;new&nbsp;</span> journey?</h2>
      </div>
      
      <p className="text-lg text-center max-w-250">Don't let your dream getaway remain a dream any longer. Take action now and let us craft your next unforgettable adventure. Join us in turning your travel fantasies into unforgettable realities.</p>
      
      <div className="w-220 gap-4 flex flex-col">
        <div className="flex gap-4">

          <input
            type="text"
            placeholder="Name"
            className="
              w-full
              bg-[#ffffff]
              shadow-md
              rounded-lg
              p-4
              outline-none
              placeholder:text-gray-500
            "
          />

          <input
            type="email"
            placeholder="Email"
            className="
              w-full
              bg-[#ffffff]
              shadow-md
              rounded-lg
              p-4
              outline-none
              placeholder:text-gray-500
            "
          />

        </div>

        <textarea
          placeholder="Message"
          className="
            w-full
              bg-[#ffffff]
              shadow-md
              rounded-lg
              h-65
              p-4
              outline-none
              placeholder:text-gray-500
          "
        />

        <button className="w-full bg-black text-white font-medium py-3 rounded-lg hover:bg-[#333] transition-colors duration-300">
          Send Message
        </button>
      </div>

      
    </div>
  )
}
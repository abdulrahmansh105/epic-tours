import Comment from "./comment.jsx";
import useInView from "/src/hooks/useInView.js";

export default function Comments() {
  const { ref, isInView } = useInView(0.5);

  return (
    <div className="bg-[#f1f1f150] h-screen flex flex-col justify-center px-15 " ref={ref}>
      <div className="flex justify-between my-20">
        <div>
          <h2 className={"text-6xl " + (isInView ? " animate-[fadeUpBlur_0.7s_ease-out_forwards]" : " opacity-0")}>Real<span className="font-playfair italic"> stories </span></h2>
          <h2 className={"text-6xl opacity-0 " + (isInView ? " animate-[fadeUpBlur_0.7s_ease-out_0.4s_forwards]" : " opacity-0")}>from travelers</h2>
        </div>
        
        <span className="text-8xl  font-playfair">,,</span>
      </div>
      
      <div className="py-3 flex justify-center items-center gap-4">
        <Comment
          comment="My travel dreams finally came true, thanks to them. I explored places I never thought I would see, and everything was seamless from start to finish during the trip."
          img="/public/assets/imgs/1g0mHLL1H9GNvUHaphR1M1nSPyQ.avif"
          name="John Doe"
          country="United States"
        />
        <Comment
          comment="My travel dreams finally came true, thanks to them. I explored places I never thought I would see, and everything was seamless from start to finish during the trip."
          img="/public/assets/imgs/1g0mHLL1H9GNvUHaphR1M1nSPyQ.avif"
          name="John Doe"
          country="United States"
        />
        <Comment
          comment="My travel dreams finally came true, thanks to them. I explored places I never thought I would see, and everything was seamless from start to finish during the trip."
          img="/public/assets/imgs/1g0mHLL1H9GNvUHaphR1M1nSPyQ.avif"
          name="John Doe"
          country="United States"
        />
        <Comment
          comment="My travel dreams finally came true, thanks to them. I explored places I never thought I would see, and everything was seamless from start to finish during the trip."
          img="/public/assets/imgs/1g0mHLL1H9GNvUHaphR1M1nSPyQ.avif"
          name="John Doe"
          country="United States"
        />
      </div>
    </div>
  )
}
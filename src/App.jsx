import { useState } from 'react'
import './App.css'

// components
import MainHero from "/src/components/main-hero.jsx";
import TheArtOf from "/src/components/theArtOf.jsx";
import Packages from "/src/components/packages.jsx";
import Services from "/src/components/services.jsx";
import Destinations from "/src/components/destinations.jsx";
import Video    from "/src/components/video.jsx";
import Comments from "/src/components/comments.jsx";
import Embark   from "/src/components/embark.jsx";
import Footer   from "/src/components/footer.jsx";



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[#f1f1f190] font-cormorant">
      <MainHero     />
      <TheArtOf     />
      <Packages     />
      <Services     />
      <Destinations />
      <Video        />
      <Comments     />
      <Embark       />
      <Footer       />
    </div>
  )
}

export default App

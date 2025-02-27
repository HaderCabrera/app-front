import Hero from "@/components/hero/Hero";
import CardWhy from "@/components/cardwhy/CardWhy";
import Carrucel from "@/components/motion/motionCarrucel/Carrucel";
import Services from "@/components/services/Services";

const Homepage = () => {
  return (
    <div>      
      <Hero/>
      <CardWhy/>
      <Carrucel/>
      <Services/>
      <CardWhy/>

    </div>

  )
}

export default Homepage
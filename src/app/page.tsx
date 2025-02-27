import Hero from "@/components/hero/Hero";
import CardWhy from "@/components/cardwhy/CardWhy";
import Carrucel from "@/components/motion/motionCarrucel/Carrucel";
import Services from "@/components/services/Services";
import Faoter from "@/components/footer/Faoter";

const Homepage = () => {
  return (
    <div>      
      <Hero/>
      <CardWhy/>
      <Carrucel/>
      <Services/>
      <Faoter/>

    </div>

  )
}

export default Homepage
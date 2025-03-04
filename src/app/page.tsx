import Hero from "@/components/hero/Hero";
import CardWhy from "@/components/cardwhy/CardWhy";
import Carrucel from "@/components/motion/motionCarrucel/Carrucel";
import Services from "@/components/services/Services";
import Faoter from "@/components/footer/Faoter";
import PlanComp from "@/components/plans/PlanComp";
import ColapseCard from "@/components/cardwhy/ColapseCard"

const Homepage = () => {
  return (
    <>
      <div className="flex flex-col gap-6">      
        <Hero/>
        <CardWhy/>
        <Carrucel/>
        <Services/>
        <PlanComp/>
      </div>
      <Faoter/>
    </> 
  )
}

export default Homepage
import Hero from "@/components/hero/Hero";
import CardWhy from "@/components/cardwhy/CardWhy";
import Carrucel from "@/components/motion/motionCarrucel/Carrucel";
import Faoter from "@/components/footer/Faoter";
import PlanComp from "@/components/plans/PlanComp";

import FAQSection from "@/components/faqs/FaqSection";

import Services from "@/components/services/Services";

const Homepage = () => {
  return (
    <>
      <div className="flex flex-col gap-6">      
        <Hero/>
        <Services/>
        <CardWhy/>
        <Carrucel/>
        <FAQSection/>
        <PlanComp/>
      </div>
      <Faoter/>
    </> 
  )
}

export default Homepage
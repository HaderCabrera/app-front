import Hero from "@/components/hero/Hero";
import CardWhy from "@/components/cardwhy/CardWhy";
import Carrucel from "@/components/motion/motionCarrucel/Carrucel";
import Faoter from "@/components/footer/Faoter";
import PlanComp from "@/components/plans/PlanComp";
import ServicesSlide from "@/components/services/ServicesSlide";
import FAQSection from "@/components/faqs/FaqSection";

const Homepage = () => {
  return (
    <>
      <div className="flex flex-col gap-6">      
        <Hero/>
        <ServicesSlide/>
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
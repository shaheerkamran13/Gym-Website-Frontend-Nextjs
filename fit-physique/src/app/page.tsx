import About from "../../components/About";
import Brands from "../../components/Brands";
import Classes from "../../components/Classes";
import Hero from "../../components/Hero";
import Membership from "../../components/Membership";
import Team from "../../components/Team";
import Testimonial from "../../components/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Classes/>
      <Team/>
      <Membership/>
      <Testimonial/>
      <Brands/>

      {/* Temporary div */}

      <div className='h-[3000px]'></div>
    </main>  
  );
}

import Navbar2 from "@/components/Anees/Navbar2";
import AllHero from "@/components/Services/AllHero";
import { FeatureStepsDemo } from "@/components/Services/Section2/FeatureStepsDemo";
import Experties from "@/components/Services/Experties/Experties";
import CircularGallery from "@/components/Services/Service2/CircularGallery";
import TechStackShowcase from "@/components/Services/TechStackShowcase/TechStackShowcase";
import Feature from "@/components/Services/Feature/Feature";
import Footer1 from "@/components/Services/Footer/Footer1";
import ContactForm from "@/components/Anees/ContactForm";
import Location from "@/components/Location/Location";


import NewsLetter from "@/components/Services/NewsLetter/NewsLetter";
import AgencyStatistics, {
  ClientSatisfaction,
  FeatureCard,
  StatCard,
  StatisticsSection,
  WorldMap,
} from "@/components/Services/Statistics/agency-statistics";

import BannerSlider1 from "@/components/Anees/BannerSlider1";


import Testimonials1 from "@/components/Anees/Testimonials1";
import Pricing1 from "@/components/Anees/Pricing1";
import Accordian from "@/app/anees/Accordian-inner";
export default function Home() {
  return (
    <>
      <Navbar2 />
      <AllHero />
      <BannerSlider1 />
      <FeatureStepsDemo />
      <main className="bg-gradient-to-b from-slate-50 to-slate-100">
      <TechStackShowcase/>
    </main>
      {/* <div style={{ height: "300px", position: "relative" }}> */}
        <CircularGallery bend={3} textColor="black" borderRadius={0.05} />
      {/* </div> */}
      {/* <Feature/> */}
      {/* <Pricing1/> */}
      <NewsLetter/>
      {/* <Experties/> */}
      {/* <StatisticsSection/> */}
      <Testimonials1 />
      <Accordian/>
      <div className="!py-20 bg-gradient-to-b from-[#48128A]  to-[#8B3791]   ">

<ContactForm/>
      </div>
<Location/>
      <Footer1/>
    </>
  );
}

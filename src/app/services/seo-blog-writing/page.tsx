import Navbar2 from "@/components/Anees/Navbar2";
import AllHero from "./seo-content/AllHero";
import { FeatureStepsDemo } from "./seo-content/FeatureStepsDemo";
import Experties from "./seo-content/Experties";
import CircularGallery from "@/components/Services/Service2/CircularGallery";
import TechStackShowcase from "./seo-content/TechStackShowcase";
import Feature from "@/components/Services/Feature/Feature";
import Footer1 from "@/components/Services/Footer/Footer1";
import ContactForm from "@/components/Anees/ContactForm";


import NewsLetter from "@/components/Services/NewsLetter/NewsLetter";
import AgencyStatistics, {
  ClientSatisfaction,
  FeatureCard,
  StatCard,
  StatisticsSection,
  WorldMap,
} from "@/components/Services/Statistics/agency-statistics";
import Location from "@/components/Location/Location";

import BannerSlider1 from "@/components/Anees/BannerSlider1";


import Testimonials1 from "@/components/Anees/Testimonials1";
import Pricing1 from "@/components/Anees/Pricing1";
import Accordian from "./seo-content/Accordian";
export default function Home() {
  return (
    <>
    {/* same */}
      <Navbar2 />
      {/* change1 */}
      <AllHero />
      {/* same */}
      <BannerSlider1 />
     {/* change */}
      <FeatureStepsDemo />
      {/* Change */}
      <main className="bg-gradient-to-b from-slate-50 to-slate-100">
      <TechStackShowcase/>
    </main>
    {/* change */}
      {/* <div style={{ height: "300px", position: "relative" }}> */}
        <CircularGallery bend={3} textColor="black" borderRadius={0.05} />
      {/* </div> */}
      {/* change */}
      
      {/* <Pricing1/> */}
      <NewsLetter/>
      <Experties/>
      <StatisticsSection/>
      <Accordian/>
      <Testimonials1 />
      <div className="!py-32 !bg-[url('https://res.cloudinary.com/dhggagqst/image/upload/v1742503688/White_Bg-08_rsfc7s.png')] bg-cover bg-center bg-no-repeat -z-50   ">
<ContactForm/>
      </div>

      <Location/>
      <Footer1/>
    </>
  );
}

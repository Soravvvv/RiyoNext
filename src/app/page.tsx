import HeroHome from "@/components/home/HeroHome";
import Header from "@/components/shared/header";
import HomeSection2 from "@/components/home/HomeSection2";
import HomeOurservice from "@/components/home/HomeOurservice";
import HomeAouImpact from "@/components/home/HomeOurImpact";
import HomeOurPresence from "@/components/home/HomeOurPresence";
import HomeCompanyCorner from "@/components/home/HomeCompanyCorner";
import HomeAboutUs from "@/components/home/HomeAboutUs";
import RiyoServicesMobileApp from "@/components/riyoservices/RiyoServicesMobileApp"
import RiyoServicesApplication from "@/components/riyoservices/RiyoServicesApplication";
import HomeGetTouch from "@/components/home/HomeGetTouch";
import HomeForm from "@/components/home/HomeForm";

export default function Home() {
  return (
    <main>

      <HeroHome />
      <Header />
      <HomeSection2 />
      <HomeOurservice />
      <HomeAouImpact />
      <HomeOurPresence />
      <HomeCompanyCorner />
      <HomeAboutUs/>
      <RiyoServicesMobileApp/>
      <RiyoServicesApplication/>
      <HomeGetTouch/>
      <HomeForm/>
    </main>
  );
}

import RiyoHero from "@/components/riyoLogistics/RiyoHero"
import Header from "@/components/shared/header"
import RiyoLogisticsSection2 from "@/components/riyoLogistics/RiyoLogisticsSection2"
import RiyoPackage from "@/components/riyoLogistics/RiyoPackage"
import RiyoLogo from "@/components/riyoLogistics/riyoLogo"
import RiyoSignUp from "@/components/riyoLogistics/RiyoSignup"
import RiyoOurCollaborations from "@/components/riyoLogistics/RiyoOurCollaborations"
import RiyoLogisticsTestimonials from "@/components/riyoLogistics/RiyoLogisticsTestimonials"
import RiyoLogisticsGetInTouch from "@/components/riyoLogistics/RiyoLogisticsGetInTouch"
const page = () => {
  return (
    <div>
        <Header />
      <RiyoHero />
      <RiyoLogisticsSection2 />
      <RiyoPackage />
      <RiyoLogo />
      <RiyoSignUp />
      <RiyoOurCollaborations />
      <RiyoLogisticsTestimonials />
      <RiyoLogisticsGetInTouch />
    </div>
  )
}

export default page

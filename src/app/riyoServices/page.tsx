import HeroHomeRiyoServices from "@/components/riyoServices/HeroHomeRiyoServices"
import Header from "@/components/shared/header"
import RiyoLogSection from "@/components/riyoServices/RiyoLogSection"
import RiyoBusinessSection from "@/components/riyoServices/RiyoBusinessSection"
import RiyoSurakhshaSection from "@/components/riyoServices/RiyoSurakhshaSection"
import RiyoParivaar from "@/components/riyoServices/RiyoParivaar"
import Download from "@/components/riyoServices/Download"
import RiyoServicesMobileApp from "@/components/riyoservices/RiyoServicesMobileApp"
import RiyoServicesApplication from "@/components/riyoservices/RiyoServicesApplication"

const page = () => {
  return (
    <div>
      <Header />
      <HeroHomeRiyoServices />
      <RiyoLogSection />
      <RiyoBusinessSection />
      <RiyoSurakhshaSection />
      <RiyoParivaar />
      <Download />
      <RiyoServicesMobileApp />
      <RiyoServicesApplication />
    </div>
  )
}

export default page

import Header from "@/components/shared/header"
import AboutBusiness from "@/components/about/AboutBusiness"
import MissionVision from "@/components/about/MissionVision"
import RiyoServicesMobileApp from "@/components/riyoservices/RiyoServicesMobileApp"
import RiyoServicesApplication from "@/components/riyoservices/RiyoServicesApplication"
const page = () => {
  return (
    <div>
      < Header />
      <AboutBusiness />
      < MissionVision />
      <RiyoServicesMobileApp/>
      <RiyoServicesApplication/>
    </div>
  )
}

export default page

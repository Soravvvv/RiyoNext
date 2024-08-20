
import HeroPrivacyPolicy from '@/components/privacypolicy/HeroPrivacyPolicy'
import PrivacyPolicy from '@/components/privacypolicy/PrivacyPolicy'
import Header from '@/components/shared/header'

const page = () => {
  return (
    <div>
        <Header />
        <HeroPrivacyPolicy/>
        <PrivacyPolicy/>
    </div>
  )
}

export default page
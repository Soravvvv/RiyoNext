
import Header from '@/components/shared/header'
import TermAndConditionHeroSection from '@/components/term&condition/TermAndConditionHeroSection'
import TermandconditionsSection from '@/components/term&condition/TermAndConditionsSection'

const page = () => {
  return (
    <div>
        <Header />
        <TermAndConditionHeroSection/>
        <TermandconditionsSection/>
    </div>
  )
}

export default page
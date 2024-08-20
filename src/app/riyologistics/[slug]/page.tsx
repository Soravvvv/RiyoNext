import logisticsData from '../../data/logisticsData.json';
import RiyoHero from '@/components/riyoLogistics/RiyoHero';
import Header from '@/components/shared/header';
import RiyoLogisticsSection2 from '@/components/riyoLogistics/RiyoLogisticsSection2';
import RiyoPackage from '@/components/riyoLogistics/RiyoPackage';
import RiyoLogo from '@/components/riyoLogistics/riyoLogo';
import RiyoSignUp from '@/components/riyoLogistics/RiyoSignup';
import RiyoOurCollaborations from '@/components/riyoLogistics/RiyoOurCollaborations';
import RiyoLogisticsTestimonials from '@/components/riyoLogistics/RiyoLogisticsTestimonials';
import RiyoLogisticsGetInTouch from '@/components/riyoLogistics/RiyoLogisticsGetInTouch';

interface RiyoLogisticData {
  heading: string;
  heading2: string;
  description: string;
  riyoPageName: string;
  paragraph: string;
  paragraph2: string;
  image1: string;
  image2: string;
  Parivahan: {
    Heading: string;
    subHeading: string;
    card1: {
      topHeading: string;
      lines: string[];
      bottomHeading: string;
    };
    card2: {
      topHeading: string;
      lines: string[];
      bottomHeading: string;
    };
  };
  logos: string[];
  screenshots: {
    scrinshot1: string;
    scrinshot2: string;
    scrinshot3: string;
    scrinshot4: string;
  };
  joinNowParagraph: string;
  qrcode: string;
  link: string;
  collaborations: {
    heading: string;
    heading2?: string;
    heading3?: string;
    heading4?: string;
    detail?: string;
  }[];
  contact: {
    heading: string;
    mobilenumber: string;
    email: string;
  };
  testimonials: {
    slider1: {
      paragraph: string;
      name: string;
      director: string;
      logistics: string;
    };
    slider2: {
      paragraph: string;
      name: string;
      director: string;
      logistics: string;
    };
    slider3: {
      paragraph: string;
      name: string;
      director: string;
      logistics: string;
    };
    slider4: {
      paragraph: string;
      name: string;
      director: string;
      logistics: string;
    };
  };
}

interface PageProps {
  params: { slug: string };
}
const filterDataByKey = (data: any[], key: string, value: any) => {
  return data.filter(item => item[key] === value);
};

export default async function Page({ params }: PageProps) {
  const { slug } = params;


  // Fetch data based on the slug
  const data: RiyoLogisticData=filterDataByKey(logisticsData, 'id', slug)[0]

  // Check if the data is undefined
  if (!data) {
    // Handle case where data is undefined
    return <div>Data not found</div>;
  } 

  return (
    <div>
      {/* Pass the necessary data as props to your components */}
      <Header />
      <RiyoHero logisticAllData={data} />
      <RiyoLogisticsSection2 logisticAllData={data} />
      <RiyoPackage logisticAllData={data} />
      <RiyoLogo logisticAllData={data}/>
      <RiyoSignUp logisticAllData={data}/>
      <RiyoOurCollaborations logisticAllData={data}/>
      <RiyoLogisticsTestimonials logisticAllData={data}/>
      <RiyoLogisticsGetInTouch logisticAllData={data}/>
    </div>
  );
}

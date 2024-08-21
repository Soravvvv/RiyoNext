"use client";
interface LogisticAllData {
  riyoPageName?: string;
  paragraph?: string;
  paragraph2?: string;
  image1?: string;
  image2?: string;
}

interface RiyoLogisticsSection2Props {
  logisticAllData?: LogisticAllData; // Marked as optional to handle potential undefined cases
}

const RiyoLogisticsSection2: React.FC<RiyoLogisticsSection2Props> = ({ logisticAllData }) => {

  if (!logisticAllData) {
    return <div>No data available</div>; // Handle case where logisticAllData is undefined
  }

  console.log('Logistic Data:', logisticAllData.image1);

  return (
    <div className="flex flex-col lg:flex-row lg:h-full py-12 px-4 lg:px-16 items-center relative">
      <div className="lg:w-3/5 h-full z-10 flex items-center justify-center relative">
        <div className="relative text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
        <p className="relative z-10  text-[1.5rem] leading-loose mb-2">
        {/* <div className="absolute  h-14 w-14 rounded-full bg-gradient-to-r from-primary-orange to-primary-blue opacity-50 z-0"></div> */}
        <span className="font-bold text-primary-orange">
        <span className="text-primary-blue">At </span>{logisticAllData?.riyoPageName}
            </span>, {logisticAllData?.paragraph}
          </p>
          <p className="relative z-10 text-[1.5rem] leading-loose mt-2">
            {logisticAllData.paragraph2 || 'Default paragraph text.'}
          </p>
        </div>
      </div>
      <div className="lg:w-2/5 relative flex flex-col">
        <div className="flex flex-col lg:flex-row justify-between lg:space-x-4">
          <div className="relative flex-shrink-0 lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={logisticAllData.image1 || '/default-image1.jpg'}
              alt="Image 1"
              className="w-full h-40 lg:h-60 xl:h-80 2xl:h-[36rem] rounded-lg object-cover shadow-lg"
            />
            {/* <div className="absolute top-0 left-0 w-4 h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8 bg-gradient-to-r from-primary-orange to-primary-blue rounded-full"></div> */}
          </div>
          <div className="relative flex-shrink-0 lg:w-1/2">
            {/* <div className="absolute bottom-0 right-0 w-4 h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8 bg-gradient-to-r from-primary-blue to-primary-orange rounded-full"></div> */}
            <img
              src={logisticAllData.image2 || '/default-image2.jpg'}
              alt="Image 2"
              className="w-full h-40 lg:h-60 xl:h-80 2xl:h-[36rem] rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiyoLogisticsSection2;

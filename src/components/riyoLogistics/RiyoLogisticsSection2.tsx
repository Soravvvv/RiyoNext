"use client";

interface LogisticAllData {
  riyoPageName?: string;
  paragraph?: string;
  paragraph2?: string;
  image1?: string;
  image2?: string;
}

interface RiyoLogisticsSection2Props {
  logisticAllData?: LogisticAllData;
}

const RiyoLogisticsSection2: React.FC<RiyoLogisticsSection2Props> = ({ logisticAllData }) => {
  if (!logisticAllData) {
    return <div>No data available</div>;
  }

  console.log('Logistic Data:', logisticAllData.image1);

  return (
    <div className="flex flex-col lg:flex-row lg:h-full py-12 px-4 lg:px-16 items-center relative">
      {/* Text Section */}
      <div className="w-full lg:w-3/5 h-full z-10 flex items-center justify-center mb-8 lg:mb-0">
        <div className="relative text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          <p className="relative z-10 text-[1.25rem] sm:text-[1.5rem] leading-loose mb-2">
            <span className="font-bold text-primary-orange">
              <span className="text-primary-blue">At </span>{logisticAllData?.riyoPageName}
            </span>, {logisticAllData?.paragraph}
          </p>
          <p className="relative z-10 text-[1.25rem] sm:text-[1.5rem] leading-loose mt-2">
            {logisticAllData.paragraph2 || 'Default paragraph text.'}
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-2/5 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="relative flex-shrink-0 w-full lg:w-1/2">
          <img
            src={logisticAllData.image1 || '/default-image1.jpg'}
            alt="Image 1"
            className="w-full h-48 sm:h-60 lg:h-60 xl:h-80 2xl:h-[36rem] rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="relative flex-shrink-0 w-full lg:w-1/2">
          <img
            src={logisticAllData.image2 || '/default-image2.jpg'}
            alt="Image 2"
            className="w-full h-48 sm:h-60 lg:h-60 xl:h-80 2xl:h-[36rem] rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default RiyoLogisticsSection2;

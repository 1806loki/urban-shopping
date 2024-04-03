import { useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";

const ProductCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex >= 2 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  return (
    <div className="w-full h-72 sm:h-72 md:h-72 lg:h-screen flex justify-center items-center">
      <div className="p-4 w-3/4 h-3/4">
        <div className="w-full flex justify-between  items-center pb-4">
          <h1 className="text-3xl font-semibold">Bestseller</h1>
          <div className="flex gap-10">
            <button onClick={handleNext}>
              <MdOutlineArrowBackIos />
            </button>
            <button onClick={handlePrevious}>
              <MdOutlineArrowBackIos className="rotate-180" />
            </button>
          </div>
        </div>

        <div className="h-full">
          {activeIndex === 0 && (
            <div className="h-full grid grid-cols-3 grid-rows-3    gap-x-10 gap-y-10">
              <div className="col-span-2 row-span-3  bg-blue-800 w-full sm:w-full"></div>
              <div className="col-span-1 row-span-1 bg-green-300 hidden md:block"></div>
              <div className="col-span-1 row-span-2 bg-blue-400 hidden md:block"></div>
            </div>
          )}
          {activeIndex === 1 && <div className="h-full bg-orange-900"></div>}
          {activeIndex === 2 && (
            <div className="h-full flex gap-4">
              <div className="h-full w-full md:w-1/2 bg-green-800"></div>
              <div className="h-full w-full md:w-1/2 bg-sky-950 hidden md:block"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;

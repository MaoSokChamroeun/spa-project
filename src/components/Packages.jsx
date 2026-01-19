import React from "react";

const Packages = () => {
  return (
    <>
      <div className="w-full mt-15 bg-gray-800">
        <div className="container mx-auto">
          <div className="mx-auto sm:w-[500px] sm:mx-auto text-center sm:text-center">
            <p className="text-[35px] font-extrabold p-2 text-white">Recommened Spa Pakages</p>
            <p className="text-white">
              Indulge yourself or with your loved one by our unique spa packages
              available only at the Mudita Spa
            </p>
          </div>

          <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-5">
            <div className="w-full p-2 sm:w-[300px] md:w-[380px] lg:w-[480px] xl:w-[500px] mx-auto mb-5">
              <figure>
                <img
                  src="https://dzhi65wojqlkc.cloudfront.net/blog/wp-content/uploads/2024/06/tractament12007.png"
                  alt=""
                />
              </figure>
              <div className="w-full flex flex-col justify-center">
                <p className="text-[30px] font-extrabold text-center mt-5 text-white">Specialized Spa Package</p>
                <div className="flex justify-center mt-5">
                    <button className="cursor-pointer border-1 border-gray-100 text-white p-3">Read More</button>
                </div>
              </div>
            </div>
            <div className="w-full p-2 sm:w-[300px] md:w-[380px] lg:w-[480px] xl:w-[500px] mx-auto mb-5">
              <img
                src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/166/2023/08/15095922/Massage-Relaxing.jpeg"
                alt=""
              />

               <div className="w-full flex flex-col justify-center">
                <p className="text-[30px] font-extrabold text-center mt-5 text-white">Specialized Spa Package</p>
                <div className="flex justify-center mt-5">
                    <button className="cursor-pointer border-1 border-gray-100 text-white p-3">Read More</button>
                </div>
              </div>
            </div>
            <div className="w-full p-2 sm:w-[300px] md:w-[380px] lg:w-[480px] xl:w-[500px] mx-auto">
              <img
                src="https://img.freepik.com/free-photo/young-woman-having-face-massage-relaxing-spa-salon_176420-7546.jpg?semt=ais_hybrid&w=740&q=80"
                alt=""
              />

               <div className="w-full flex flex-col justify-center">
                <p className="text-[30px] font-extrabold text-center mt-5 text-white">Specialized Spa Package</p>
                <div className="flex justify-center mt-5">
                    <button className="cursor-pointer border-1 border-gray-100 text-white p-3">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;

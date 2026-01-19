import React from "react";
import Layout from "../../layout/Layout";
import packages from "../../data/pakage";
const SpaPackages = () => {
  return (
    <>
      <Layout>
        <div className="w-full">
          <div className="w-full">
            <figure className="w-full">
              <img
                src="https://www.angkorspa.net/wp-content/uploads/2025/11/Oil-Massage-1890x760.png"
                alt=""
                className="object-cover w-full h-[600px]"
              />
            </figure>
          </div>'
          <div className="max-w-7xl mx-auto mt-10 mb-10">
                <p className="text-center text-[35px] font-extrabold mb-5">Spa Packages</p>
                <p className="mb-10 text-gray-500">Nurturing elements and purifying body treatments promote tranquility and leave you a feeling of totally rejuvenated, gently relaxed and wonderfully invigorated. Nourish your face and body while promoting relaxation of the mind.</p>
                <p className="text-gray-500">Our spa packages have been carefully designed to create various ways to escape the stress of everyday life. Treat yourself to a relaxing ritual , and redefine your mental and physical well-being, or pamper someone you love with the gift of rejuvenation.</p>
            </div>
          <div className="max-w-7xl mx-auto border border-gray-300 mt-5">
            
            <div>
              {packages.map((items) => (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 border-b-1 border-gray-300" key={items.id}>
                  {/* LEFT CONTENT (2 columns) */}
                  <div className="lg:col-span-2 p-8 ">
                    <h1 className="text-[30px] font-extrabold text-gray-800">
                      {items.name}
                    </h1>

                    <p className="mt-4 text-gray-600">
                      <span className="font-semibold">Benefit:</span> 
                      {items.benefits[0]}
                    </p>

                    <div className="mt-4">
                      <p className="font-semibold text-gray-700">Method:</p>
                      <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
                        <li>{items.method.steps[0]}</li>
                        <li>{items.method.steps[1]}</li>
                      </ul>
                    </div>

                    <p className="mt-4 text-gray-600">
                      <span className="font-semibold">Massage:</span> 
                      {items.method.steps[2]}
                    </p>
                  </div>

                  {/* RIGHT SIDE (PRICE + BUTTON) */}
                  <div className="border-t lg:border-t-0 lg:border-l border-gray-300 flex flex-col items-center justify-center p-8">
                    <p className="text-gray-600 mb-3">USD63 / 90min</p>
                    <button className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800 transition">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SpaPackages;

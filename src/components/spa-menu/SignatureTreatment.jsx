import React from "react";
import Layout from "../../layout/Layout";

const SignatureTreatment = () => {
  return (
    <>
      <Layout>
        <div className="w-full">
          <div className="w-full">
            <figure>
              <img
                src="https://www.dlghoteldanang.com/images/La-Belle-Vie-Salon-Spa.jpg"
                className="w-full object-cover h-[600px]"
                alt=""
              />
            </figure>
          </div>
          <div className="mt-10 max-w-7xl mx-auto">
            <p className="text-center text-[35px] font-extrabold">
              Signature Treatment
            </p>

            <div className="w-full border border-gray-300 mt-5">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* LEFT CONTENT (2 columns) */}
                <div className="lg:col-span-2 p-8">
                  <h1 className="text-[30px] font-extrabold text-gray-800">
                    Mudita Signature Treatment
                  </h1>

                  <p className="mt-4 text-gray-600">
                    <span className="font-semibold">Benefit:</span> Relieve
                    stress, increase energy flow, improve circulation, relax
                    muscles and calm nerves.
                  </p>

                  <div className="mt-4">
                    <p className="font-semibold text-gray-700">Method:</p>
                    <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
                      <li>Four-hand massage</li>
                      <li>Warm compress</li>
                    </ul>
                  </div>

                  <p className="mt-4 text-gray-600">
                    <span className="font-semibold">Massage:</span> Oil – based
                    on guest favorite
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
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SignatureTreatment;

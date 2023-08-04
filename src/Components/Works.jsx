import React from "react";

export const Works = () => {
  return (
    <section className="bg-works py-28 bg-no-repeat bg-cover">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-xl text-brand font-poppins font-medium capitalize pb-3">
              digital experience
            </h4>
            <h2 className="text-5xl text-primary font-poppins font-semibold leading-tight capitalize w-full lg:w-[693px]">
              The hundred of completed works still counting
            </h2>
          </div>
          <div>
            <a
              href=""
              className="inline-block py-3 px-7 border border-brand rounded-2xl text-brand text-lg capitalize hover:bg-brand hover:text-white hover:border-none transition-all"
            >
              View all
            </a>
          </div>
        </div>
        <div className="pt-14">
          <div className="flex gap-5">
            <div className="w-2/5">
              <img src="images/mobile-app.jpg" alt="mobile-app" />
              <div className=" bg-gray-100 pl-7">
                <h5 className="text-2xl text-primary font-poppins font-semibold pt-7">
                  Mobile App
                </h5>
                <a
                  href=""
                  className="inline-block text-lg text-brand font-nunito font-medium pt-3 pb-5"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="w-3/5">
              <img src="images/ecomerce.jpg" alt="mobile-app" />
              <div className=" bg-gray-100 pl-7">
                <h5 className="text-2xl text-primary font-poppins font-semibold pt-7">
                  ECommerce Solution
                </h5>
                <a
                  href=""
                  className="inline-block text-lg text-brand font-nunito font-medium pt-3 pb-5"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-5 pt-8">
            <div className="w-3/5 group">
              <img src="images/ecomerce.jpg" alt="mobile-app" />
              <div className=" bg-gray-100 pl-7">
                <h5 className="text-2xl text-primary font-poppins font-semibold pt-7">
                  Mobile App
                </h5>
                <a
                  href=""
                  className="inline-block text-lg text-brand font-nunito font-medium pt-3 pb-5"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="w-2/5">
              <img src="images/mobile-app.jpg" alt="mobile-app" />
              <div className=" bg-gray-100 pl-7">
                <h5 className="text-2xl text-primary font-poppins font-semibold pt-7">
                  Mobile App
                </h5>
                <a
                  href=""
                  className="inline-block text-lg text-brand font-nunito font-medium pt-3 pb-5"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

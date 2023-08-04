import React from "react";

export const Works = () => {
  return (
    <section className="bg-works py-28">
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
      </div>
    </section>
  );
};

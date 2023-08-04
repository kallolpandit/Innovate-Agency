import React from "react";

export const Connect = () => {
  return (
    <section className="relative">
      <div className="container">
        <div>
          <h4 className="text-xl text-brand font-poppins font-medium capitalize pb-3">
            digital experience
          </h4>
          <h2 className="text-5xl text-primary font-poppins font-semibold capitalize leading-tight w-full lg:w-[450px]">
            Connect people in digital life
          </h2>
        </div>
        <div className="flex">
          <div className="w-[45%] absolute inset-1/3 left-0">
            <img src="images/connect-people.jpg" alt="connect-people" />
          </div>
          <div className="w-3/5 bg-orange-100 pl-28 ml-auto">
            <h3 className="text-primary text-4xl font-poppins font-semibold w-full lg:w-[570px] capitalize leading-tight pt-20">
              More than just an ad agency, we harness the tools of traditional
              and digital.
            </h3>
            <p className="text-secondary text-lg font-nunito font-normal w-full lg:w-[500px] capitalize leading-normal pt-5 pb-12">
              With over 25 years of experience, we have crafted thousands of
              strategic discovery process that enables us to peel back the
              layers which enable us to understand, connect, represent and
              dominate your market.
            </p>
            <a
              href=""
              className="text-white text-lg font-nunito font-semibold capitalize py-3 px-7 rounded-2xl bg-brand inline-block mb-10 border hover:bg-transparent hover:text-brand hover:border-brand transition-all"
            >
              More about us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

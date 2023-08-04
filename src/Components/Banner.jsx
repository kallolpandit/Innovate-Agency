import React from "react";

export const Banner = () => {
  return (
    <section className="bg-banner pt-48 pb-28 bg-no-repeat bg-cover">
      <div className="container">
        <div className="text-center">
          <h1 className="text-primary text-6xl font-poppins font-bold w-full lg:w-[770px] capitalize m-auto pb-6">
            We are a full range design agency
          </h1>
          <p className="text-secondary text-lg font-nunito font-normal w-full lg:w-[547px] capitalize m-auto">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime.
          </p>
          <div className="flex gap-6 justify-center pt-11">
            <a
              href=""
              className="inline-block text-lg text-white font-nunito font-semibold bg-brand py-3 px-7 rounded-2xl border hover:bg-transparent hover:border-brand hover:text-brand transition-all"
            >
              Contact us
            </a>
            <a
              href=""
              className="inline-block text-lg text-brand font-nunito font-semibold bg-transparent border border-brand py-3 px-7 rounded-2xl"
            >
              Showcase
            </a>
          </div>
        </div>
        <div className="flex gap-7 mt-32 flex-col lg:flex-row">
          <div className="bg-white py-7 px-5 w-1/3">
            <img src="images/grow.png" alt="grow" />
            <h3 className="text-primary text-2xl font-poppins font-semibold capitalize pt-8 pb-4">
              Grow your business
            </h3>
            <p className="text-secondary text-lg font-nunito font-normal capitalize">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
            </p>
          </div>
          <div className="bg-white py-7 px-5 w-1/3">
            <img src="images/marketing.png" alt="marketing" />
            <h3 className="text-primary text-2xl font-poppins font-semibold capitalize pt-8 pb-4">
              Digital marketing
            </h3>
            <p className="text-secondary text-lg font-nunito font-normal capitalize">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
            </p>
          </div>
          <div className="bg-white py-7 px-5 w-1/3">
            <img src="images/seo.png" alt="seo" />
            <h3 className="text-primary text-2xl font-poppins font-semibold capitalize pt-8 pb-4">
              Search engine optimization
            </h3>
            <p className="text-secondary text-lg font-nunito font-normal capitalize">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

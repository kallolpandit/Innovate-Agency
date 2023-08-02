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
              showcase
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

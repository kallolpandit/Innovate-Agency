import React from "react";

export const Project = () => {
  return (
    <section className="bg-project bg-no-repeat bg-cover ">
      <div className="container">
        <div className="flex justify-between items-center border-b border-gray-400 pb-12 pt-20">
          <div className="">
            <h4 className="text-xl text-primary font-poppins font-normal pb-3">
              Lets Talk
            </h4>
            <h2 className="text-5xl text-primary font-poppins font-semibold">
              Got a project?
            </h2>
          </div>
          <div>
            <a
              href=""
              className="inline-block text-lg text-white font-nunito font-semibold py-3 px-7 bg-brand rounded-2xl border hover:text-brand hover:bg-transparent hover:border-brand"
            >
              Contact us
            </a>
          </div>
        </div>
        <div className="pb-14">
          <p className="text-lg text-secondary font-nunito font-normal w-full lg:w-[1150px] capitalize pt-6">
            As a leading digital platform in Paris, we look to engage with our
            clients beyond the conventional design and development agency
            relationship, becoming a partner to the people and companies we work
            with.
          </p>
        </div>
      </div>
    </section>
  );
};

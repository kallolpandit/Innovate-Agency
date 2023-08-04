import React from "react";

export const Counting = () => {
  return (
    <section className="bg-counting bg-no-repeat bg-cover pt-5 pb-28">
      <div className="container">
        <div className="flex gap-14 flex-col lg:flex-row">
          <div className="w-2/4">
            <div className="flex gap-8">
              <div className="text-center w-2/5 bg-slate-100 py-14">
                <h5 className="text-primary text-4xl font-poppins font-semibold pb-3">
                  <span>19</span>+
                </h5>
                <p className="text-secondary text-lg font-nunito font-normal">
                  Total top service
                </p>
              </div>
              <div className="text-center w-2/5 bg-slate-100 py-14">
                <h5 className="text-primary text-4xl font-poppins font-semibold pb-3">
                  <span>27</span>+
                </h5>
                <p className="text-secondary text-lg font-nunito font-normal">
                  Total top service
                </p>
              </div>
            </div>
            <div className="flex gap-8 pt-7">
              <div className="text-center w-2/5 bg-slate-100 py-14">
                <h5 className="text-primary text-4xl font-poppins font-semibold pb-3">
                  <span>98</span>%
                </h5>
                <p className="text-secondary text-lg font-nunito font-normal">
                  Total top service
                </p>
              </div>
              <div className="text-center w-2/5 bg-slate-100 py-14">
                <h5 className="text-primary text-4xl font-poppins font-semibold pb-3">
                  <span>1,458</span>
                </h5>
                <p className="text-secondary text-lg font-nunito font-normal">
                  Total top service
                </p>
              </div>
            </div>
          </div>
          <div className="w-2/4">
            <h3 className="text-primary text-5xl font-poppins font-semibold capitalize w-full lg:w-[570px] leading-tight">
              The hundred of completed works still counting
            </h3>
            <p className="text-secondary text-lg font-nunito font-normal capitalize w-full lg:w-[550px] pt-5 pb-10 leading-relaxed">
              Through strategy, design, and planning we build brand identities
              that connect with your Nesi. We then fine-tune a marketing plan
              that allows us to laser focus and target your audience through the
              right channels.
            </p>
            <a
              href=""
              className="inline-block text-white text-lg font-nunito font-semibold py-3 px-7 bg-brand rounded-2xl border hover:text-brand hover:bg-transparent hover:border-brand transition-all"
            >
              More about us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

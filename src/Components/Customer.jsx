import React from "react";

export const Customer = () => {
  return (
    <section className="bg-orange-100 py-20">
      <div className="container">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-primary text-5xl font-poppins font-semibold">
              Our Customer Say
            </h2>
            <div>
              <ul className="flex gap-5 py-14 w-1/2">
                <li>
                  <img src="images/men.jpg" alt="" className="rounded-2xl" />
                </li>
                <li>
                  <img src="images/men.jpg" alt="" className="rounded-2xl" />
                </li>
                <li>
                  <img src="images/men.jpg" alt="" className="rounded-2xl" />
                </li>
                <li>
                  <img src="images/men.jpg" alt="" className="rounded-2xl" />
                </li>
                {/* <li className="p-8 bg-slate-400 rounded-2xl"></li>
                <li className="p-8 bg-slate-400 rounded-2xl"></li>
                <li className="p-8 bg-slate-400 rounded-2xl"></li>
                <li className="p-8 bg-slate-400 rounded-2xl"></li> */}
              </ul>
              <p className="text-secondary text-lg font-nunito font-normal w-full lg:w-[690px]">
                As a leading digital platform in Paris, we look to engage with
                our clients beyond the conventional design and development
                agency relationship, becoming a partner to the people and
                companies we work with.
              </p>
            </div>
          </div>
          <div>
            <img
              src="images/customer.png"
              alt="customer"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

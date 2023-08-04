import React from "react";

export const Footer = () => {
  return (
    <footer className="pt-28 pb-10">
      <div className="container">
        <div className="flex gap-9  flex-col lg:flex-row">
          <div className="w-2/5">
            <img src="images/logo.png" alt="logo" />
            <p className="text-secondary text-lg font-nunito font-normal capitalize leading-relaxed pt-11 w-full lg:w-[450px]">
              Install any demo or template with a single click. You can mix and
              match all the demos & templates. Every demo can be turned into one
              or multi-page.
            </p>
          </div>
          <div className="w-3/6">
            <div className="flex justify-between flex-col lg:flex-row">
              <div>
                <h5 className="text-primary text-2xl font-poppins font-semibold">
                  Features
                </h5>
                <ul className="text-secondary text-xl font-nunito font-semibold pt-10">
                  <li className="pb-6 hover:text-brand transition-all cursor-pointer">
                    Home
                  </li>
                  <li className="pb-6 hover:text-brand transition-all cursor-pointer">
                    About
                  </li>
                  <li className="pb-6 hover:text-brand transition-all cursor-pointer">
                    Benifit
                  </li>
                  <li className="pb-6 hover:text-brand transition-all cursor-pointer">
                    Pricing
                  </li>
                  <li className="hover:text-brand transition-all cursor-pointer	">
                    Blog
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-primary text-2xl font-poppins font-semibold">
                  Products
                </h5>
                <ul className="text-secondary text-xl font-nunito font-semibold pt-10">
                  <li className="pb-6 hover:text-brand transition-all cursor-pointer">
                    Task Management
                  </li>
                  <li className="pb-6 hover:text-brand transition-all cursor-pointer">
                    Company Growth
                  </li>
                  <li className="pb-6 hover:text-brand transition-all cursor-pointer">
                    Time Tracking
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-primary text-2xl font-poppins font-semibold">
                  Support
                </h5>
                <ul className="text-secondary text-xl font-nunito font-semibold pt-10">
                  <li className="pb-6 hover:text-brand transition-all cursor-pointer">
                    Customer service
                  </li>
                  <li className="pb-6 hover:text-brand transition-all cursor-pointer">
                    Accessibility
                  </li>
                  <li className="pb-6 hover:text-brand transition-all cursor-pointer">
                    Contact us
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-secondary text-lg font-nunito font-normal pt-10">
          <div>
            <p>@20201 Innovate.All rights reserved.</p>
          </div>
          <div className="flex gap-10">
            <a href="" className="inline-block hover:text-brand transition-all">
              Privacy Policy
            </a>
            <a href="" className="inline-block hover:text-brand transition-all">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

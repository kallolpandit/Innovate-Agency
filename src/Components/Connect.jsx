import React from "react";

export const Connect = () => {
  return (
    <section>
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
          <div className="w-2/5">
            <img src="images/connect-people.jpg" alt="connect-people" />
          </div>
          <div className="w-3/5 bg-orange-100">
            <h3>
              More than just an ad agency, we harness the tools of traditional
              and digital.
            </h3>
            <p>
              With over 25 years of experience, we have crafted thousands of
              strategic discovery process that enables us to peel back the
              layers which enable us to understand, connect, represent and
              dominate your market.
            </p>
            <a href="">More about us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

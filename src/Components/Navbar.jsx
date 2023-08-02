import React from "react";
import { FaChevronDown } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="absolute top-5 left-0 w-full">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <img src="images/logo.png" alt="Logo" />
          </div>
          <div>
            <ul className=" text-primary text-lg font-poppins font-semibold flex gap-12 ">
              <li className="relative group">
                <a
                  href=""
                  className="hover:text-brand transition-all flex gap-3 items-center"
                >
                  Home <FaChevronDown />
                </a>
                <ul className="absolute top-full left-0 hidden group-hover:block transition-all bg-orange-100 text-center w-full p-5 rounded-lg">
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Home 1
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Home 2
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Home 3
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Home 4
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Home 5
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <a
                  href=""
                  className="hover:text-brand transition-all flex gap-3 items-center"
                >
                  About <FaChevronDown />
                </a>
                <ul className="absolute top-full left-0 hidden group-hover:block transition-all bg-orange-100 text-center w-full p-5 rounded-lg">
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      About 1
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      About 2
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      About 3
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      About 4
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      About 5
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <a
                  href=""
                  className="hover:text-brand transition-all flex gap-3 items-center"
                >
                  Service <FaChevronDown />
                </a>
                <ul className="absolute top-full left-0 hidden group-hover:block transition-all bg-orange-100 w-full p-5 rounded-lg">
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Service 1
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Service 2
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Service 3
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Service 4
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Service 5
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <a
                  href=""
                  className="hover:text-brand transition-all flex gap-3 items-center"
                >
                  Portfolio <FaChevronDown />
                </a>
                <ul className="absolute top-full left-0 hidden group-hover:block transition-all bg-orange-100 text-center w-full p-5 rounded-lg">
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Portfolio 1
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Portfolio 2
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Portfolio 3
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Portfolio 4
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Portfolio 5
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <a
                  href=""
                  className="hover:text-brand transition-all flex gap-3 items-center"
                >
                  Price <FaChevronDown />
                </a>
                <ul className="absolute top-full left-0 hidden group-hover:block transition-all bg-orange-100 w-full text-center py-5 rounded-lg">
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Price 1
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Price 2
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Price 3
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Price 4
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Price 5
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <a
                  href=""
                  className="hover:text-brand transition-all flex gap-3 items-center"
                >
                  Blog <FaChevronDown />
                </a>
                <ul className="absolute top-full left-0 hidden group-hover:block transition-all bg-orange-100 text-center w-full p-5 rounded-lg">
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Blog 1
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Blog 2
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Blog 3
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Blog 4
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-brand transition-all">
                      Blog 5
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <a
              href=""
              className="inline-block text-white text-lg font-nunito font-semibold py-3 px-7 bg-brand rounded-2xl border hover:bg-transparent hover:text-brand hover: border-brand transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

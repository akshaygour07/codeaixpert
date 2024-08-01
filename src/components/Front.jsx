import React from "react";
import contentpic from "../assets/images/content.png";
import svgMail from "../assets/icons/mail.svg";
import svgArrow from "../assets/icons/rightarrow.svg";
import Marquee from "react-fast-marquee";

import Company1 from "../assets/company-logo/atos.png";
import Company2 from "../assets/company-logo/ajio.png";
import Company3 from "../assets/company-logo/dell.png";
import Company4 from "../assets/company-logo/oracle.png";
import Company5 from "../assets/company-logo/ibm.png";
import Company6 from "../assets/company-logo/Intel.png";
import Company7 from "../assets/company-logo/progress.png";
import Company8 from "../assets/company-logo/e-y.png";
import Company9 from "../assets/company-logo/tcs.png";

export default function Front() {
  return (
    <header className="flex flex-col gap-3">
      <div className="flex justify-center gap-1 p-10 flex-wrap">
        <div className="flex-col text-center md:text-start gap-2 p-3">
          <h1 className="p-3 md:text-[55px] text-[33px] font-semibold md:w-[678px] leading-tight tracking-wide md:font-bold">
            Begin Your Data Science Journey with Our Expert Assistance
          </h1>
          <div className="p-3 md:text-xl text-lg md:w-[578px] [font-family:'Montserrat-Medium',Helvetica] font-medium tracking-wide text-[#333]">
            Conquer a job at top MNCs with our placement guaranteed program.
          </div>
          <div className="p-2 w-fit bg-white flex shadow leading-snug focus:outline-none md:mt-10 md:ml-4 justify-center focus:shadow-outline">
            <div className="flex p-2 border-b border-l border-solid">
              <img className="w-5 h-5 text-[#0166fe]" src={svgMail} />
              <input
                className="items-center px-4 outline-none"
                placeholder="Get in Touch with Us"
              />
            </div>
            <button>
              <img
                src={svgArrow}
                className="w-8 h-8 ml-4 p-2 bg-blue-700 hover:bg-blue-500"
              />
            </button>
          </div>
        </div>
        <div className="px-5">
          <img
            className="md:w-[450px] md:h-[550px] w-[400px] h-[430px]"
            src={contentpic}
          />
        </div>
      </div>
      <div className="p-5 text-center text-xl md:text-4xl font-semibold md:font-bold text-[#333]">
        Our <span className="text-[#0166fe]">Students</span> Trusted by Leading
        Companies
      </div>
      <div className="md:py-10 py-8 px-2 bg-gray-200">
        <Marquee speed={100}>
          <div className="flex md:gap-28 gap-20 mx-10 items-center">
            {dataComapanyLogo.map((logo) => (
              <img
                key={logo.id}
                className="md:h-20 h-14 w-[100%]"
                src={logo.img}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </header>
  );
}

const dataComapanyLogo = [
  {
    id: "1",
    img: Company1,
  },
  {
    id: "2",
    img: Company2,
  },
  {
    id: "3",
    img: Company3,
  },
  {
    id: "4",
    img: Company4,
  },
  {
    id: "5",
    img: Company5,
  },
  {
    id: "6",
    img: Company6,
  },
  {
    id: "7",
    img: Company7,
  },
  {
    id: "8",
    img: Company8,
  },
  {
    id: "9",
    img: Company9,
  },
];

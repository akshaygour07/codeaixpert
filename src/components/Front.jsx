import React from "react";
import contentpic from "../assets/images/content.png";
import svgMail from "../assets/icons/mail.svg";
import svgArrow from "../assets/icons/rightarrow.svg";

export default function Front() {
  const tabBoxClass =
    "inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]";

  return (
    <>
      <div className="flex w-[2200px] left-[100px]items-center justify-center gap-10 relative">
        <div className="inline-flex flex-col items-start gap-10 relative">
          <div className={tabBoxClass}>
            <p className="relative w-[900px] [font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-[#010100] text-[65px]">
              Begin Your Data Science Journey with Our Expert Assistance
            </p>
          </div>
          <div className={tabBoxClass}>
            <p className="relative w-[685px] opacity-80 [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#333333] text-[26px]">
              Conquer a job at top MNCs with our placement guaranteed program.
            </p>
          </div>
          <div className="inline-flex items-center left-14 top-10 p-4 relative gap-[63px] bg-white flex-[0_0_auto] shadow leading-tight focus:outline-none focus:shadow-outline">
            <div className="flex w-[323px] items-center gap-2.5 pl-2.5 pr-[15px] py-2.5 relative border-b [border-bottom-style:solid] border-l [border-left-style:solid] border-[#010100]">
              <img className="relative w-4 h-4 text-[#0166fe]" src={svgMail} />
              <input
                className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] outline-none"
                placeholder="Get in Touch with Us"
              />
            </div>
            <button>
              <img
                src={svgArrow}
                className="relative w-12 h-12 p-3 bg-[#0166fe]"
              />
            </button>
          </div>
        </div>

        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          <img className="relative w-[550px] h-[680px]" src={contentpic} />
        </div>
      </div>

      <div className="relative w-[2200px] h-[485px] flex justify-center items-center">
        <p className="absolute top-[100px] [font-family:'Montserrat-Bold',Helvetica] font-bold  text-5xl text-[#333]">
          Our <span className="text-[#0166fe]">Students</span> Trusted by
          Leading Companies
        </p>
      </div>
    </>
  );
}

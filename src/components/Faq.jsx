import React from "react";
import downSvg from "../assets/icons/down.svg";
import downArrow from "../assets/icons/downarrow.svg";

export default function Faq() {
  return (
    <div className="flex flex-col w-[2280px] h-[1117px] items-center justify-center gap-2.5 p-[375px] relative bg-[url(/faq.png)] bg-cover bg-[50%_50%]">
      <div className="inline-flex flex-col justify-center gap-2.5 p-[100px] bg-[#0166fe] rounded-3xl overflow-hidden backdrop-blur-xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(24px)_brightness(100%)] items-center relative flex-[0_0_auto]">
        <div className="inline-flex flex-col gap-[50px] items-center relative flex-[0_0_auto]">
          <div className="gap-4 flex-[0_0_auto] flex flex-col items-start px-0 py-4 relative self-stretch w-full border-b-[1.5px] [border-bottom-style:solid] border-[#ebebeb]">
            <div className="flex justify-between px-2.5 py-0 self-stretch w-full items-center relative flex-[0_0_auto]">
              <p className="w-fit [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-2xl relative text-neutral-50">
                What are some common machine learning algorithms used in data
                science?
              </p>
              <img
                className="relative w-4 h-4"
                alt="Icon chevron down"
                src={downSvg}
              />
            </div>
            <div className="flex gap-[100px] px-2.5 py-0 self-stretch w-full items-center relative flex-[0_0_auto]">
              <p className="flex-1 [font-family:'Montserrat-Medium',Helvetica] font-medium text-xl relative text-neutral-50">
                A data science project usually involves steps such as data
                collection, data cleaning, exploratory data analysis (EDA),
                feature engineering, model building, evaluation, and deployment.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 px-0 py-4 relative self-stretch w-full flex-[0_0_auto] border-b-[1.5px] [border-bottom-style:solid] border-[#ebebeb]">
            <div className="flex justify-between px-2.5 py-0 self-stretch w-full items-center relative flex-[0_0_auto]">
              <p className="w-fit [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-2xl relative text-neutral-50">
                What are some common machine learning algorithms used in data
                science?
              </p>
              <img
                className="relative w-4 h-4"
                alt="Icon chevron down"
                src={downSvg}
              />
            </div>
          </div>
          <div className="h-14 justify-around gap-3 flex flex-col items-start px-0 py-4 relative self-stretch w-full border-b-[1.5px] [border-bottom-style:solid] border-[#ebebeb]">
            <div className="flex justify-between self-stretch w-full mt-[-2.50px] mb-[-2.50px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
              <p className="w-fit [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-2xl relative text-neutral-50">
                Can you describe the software development lifecycle (SDLC) and
                your experience with it?
              </p>
              <img
                className="relative w-4 h-4"
                alt="Icon chevron down"
                src={downSvg}
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 px-0 py-4 relative self-stretch w-full flex-[0_0_auto] border-b-[1.5px] [border-bottom-style:solid] border-[#ebebeb]">
            <div className="inline-flex gap-[100px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
              <p className="w-fit [font-family:'Montserrat-Medium',Helvetica] font-semibold text-2xl relative text-neutral-50 whitespace-nowrap">
                What is your experience with version control systems like Git,
                and how do you utilize them in your projects?
              </p>
              <img
                className="relative w-4 h-4"
                alt="Icon chevron down"
                src={downSvg}
              />
            </div>
          </div>
          <div className="inline-flex gap-4 items-center relative flex-[0_0_auto]">
            <p className="relative w-fit [font-family:'Montserrat-Regular',Helvetica] font-normal text-neutral-50 text-base whitespace-nowrap">
              My question is not here.
            </p>
            <button className="all-[unset] box-border inline-flex items-center justify-center gap-1 pl-6 pr-5 py-2.5 relative flex-[0_0_auto] bg-neutral-50 rounded-lg">
              <div className="relative w-fit [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#1b242c] text-[15px] whitespace-nowrap">
                CONNECT US
              </div>
              <img
                className="relative w-[28.28px] h-[28.28px] p-[3px]"
                alt="Arrow up right"
                src={downArrow}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

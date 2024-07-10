import React from "react";
import Cart from "./Cart";

export default function MostPopularCourse() {
  return (
    <div className="courses relative w-[2280px] h-[1950px] bg-white">
      <div className="flex flex-col w-[1017px] items-center gap-10 absolute top-[149px] left-[175px]">
        <div className="inline-flex h-[94px] items-center justify-center gap-2.5 relative">
          <p className="relative w-fit [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-transparent text-[74px] tracking-[-1.48px] leading-[48px] whitespace-nowrap">
            <span className="text-[#06241b]">Most </span>
            <span className="text-[#0166fe]">Popular Course</span>
          </p>
        </div>
        <div className="flex items-center justify-center relative w-full left-[149px]">
          <p className="relative w-fit [font-family:'Public_Sans-Regular',Helvetica] font-normal text-[#333333] text-[32px] whitespace-nowrap">
            Various versions have evolved over the years, sometimes by accident.
          </p>
        </div>
      </div>
      <div className="absolute w-[2000px] h-[1338px] gap-10 top-[411px] left-[49px]">
        <div className="absolute w-[1800px] h-[637px]">
          <div className="left-[275px] absolute w-[475px] h-[637px]">
            <div className="relative h-[637px]">
              <div className="absolute w-[475px] h-[613px] top-6 left-0 bg-[#6d737a] blur-[100px] opacity-[0.12]" />
              <Cart
                title="Machine Learning and Generative AI course"
                description="The codeAIXpert course equips you with practical skills and
              knowledge to excel in machine learning and generative AI."
                amount="Rs. 4,999"
              />
            </div>
          </div>
          <div className="left-[825px] absolute w-[475px] h-[637px] top-0">
            <div className="relative h-[637px]">
              <div className="absolute w-[475px] h-[613px] top-6 left-0 bg-[#6d737a] blur-[100px] opacity-[0.12]" />
              <Cart
                title="Machine Learning and Generative AI course"
                description="The codeAIXpert course equips you with practical skills and
              knowledge to excel in machine learning and generative AI."
                amount="Rs. 4,999"
              />
            </div>
          </div>
          <div className="left-[1375px] absolute w-[475px] h-[637px] top-0">
            <div className="relative h-[637px]">
              <div className="absolute w-[475px] h-[613px] top-6 left-0 bg-[#6d737a] blur-[100px] opacity-[0.12]" />
              <Cart
                title="Machine Learning and Generative AI course"
                description="The codeAIXpert course equips you with practical skills and
              knowledge to excel in machine learning and generative AI."
                amount="Rs. 4,999"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[1800px] h-[637px] top-[657px]">
          <div className="absolute w-[475px] h-[637px] left-[275px]">
            <div className="relative h-[637px]">
              <div className="absolute w-[475px] h-[613px] top-6 left-0 bg-[#6d737a] blur-[100px] opacity-[0.12]" />
              <Cart
                title="Machine Learning and Generative AI course"
                description="The codeAIXpert course equips you with practical skills and
              knowledge to excel in machine learning and generative AI."
                amount="Rs. 4,999"
              />
            </div>
          </div>
          <div className="left-[825px] absolute w-[475px] h-[637px]">
            <div className="relative h-[637px]">
              <div className="absolute w-[475px] h-[613px] top-6 left-0 bg-[#6d737a] blur-[100px] opacity-[0.12]" />
              <Cart
                title="Machine Learning and Generative AI course"
                description="The codeAIXpert course equips you with practical skills and
              knowledge to excel in machine learning and generative AI."
                amount="Rs. 4,999"
              />
            </div>
          </div>
          <div className="left-[1375px] absolute w-[475px] h-[637px] top-0">
            <div className="relative h-[637px]">
              <div className="absolute w-[475px] h-[613px] top-6 left-0 bg-[#6d737a] blur-[100px] opacity-[0.12]" />
              <Cart
                title="Machine Learning and Generative AI course"
                description="The codeAIXpert course equips you with practical skills and
              knowledge to excel in machine learning and generative AI."
                amount="Rs. 4,999"
              />
            </div>
          </div>
        </div>
      </div>
      <button className="box-border flex w-[203px] h-[50px] items-center justify-center gap-2.5 px-[26px] py-[5px] absolute top-[1749px] left-[1025px] bg-[#0166fe] rounded-[30px]">
        <div className="relative w-fit [font-family:'Montserrat-Medium',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[normal]">
          See More
        </div>
      </button>
    </div>
  );
}

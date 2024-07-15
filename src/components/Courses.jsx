import React from "react";
import Cart from "./Cart";

export default function MostPopularCourse() {
  return (
    <div className="courses relative w-[1519px] h-[1619px] bg-white">
      <div className="flex flex-col w-[1017px] items-center gap-10 absolute top-[149px] left-[115px]">
        <div className="inline-flex items-center justify-between w-full gap-2.5 relative">
          <p className="relative w-fit [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-transparent text-[54px] whitespace-nowrap">
            <span className="text-[#06241b]">Most </span>
            <span className="text-[#0166fe]">Popular Course</span>
          </p>
        </div>
        <div className="flex items-center justify-between relative w-full ">
          <p className="relative w-fit [font-family:'Public_Sans-Regular',Helvetica] top-[-10px] font-normal text-[#333333] text-2xl whitespace-nowrap">
            Various versions have evolved over the years, sometimes by accident.
          </p>
        </div>
      </div>
      <div className="absolute w-[1519px] h-[1238px] top-[350px]">
        <div className=" absolute w-[1519px] h-[637px]">
          <div className="flex flex-row relative w-[1519px] h-[637px] gap-8 justify-center items-center flex-wrap">
            <div className=" absolute w-[1519px] h-[1338px] top-6 left-0 bg-[#6d737a] blur-[100px] opacity-[0.12] " />

            {dataCourses.map((course) => {
              return (
                <Cart
                  title={course.courseName}
                  description={course.courseDetail}
                  amount={course.amount}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[1519px] top-[1625px] relative flex flex-row items-center justify-center">
        <button className="box-border h-[50px] items-center justify-center gap-2.5 py-[5px] px-[45px] absolute bg-[#0166fe] rounded-[30px]">
          <div className="relative w-fit [font-family:'Montserrat-Medium',Helvetica] font-medium text-white text-base text-center">
            See More
          </div>
        </button>
      </div>
    </div>
  );
}

const dataCourses = [
  {
    id: "1",
    courseName: "Machine Learning and Generative AI course",
    courseDetail:
      "The codeaiXpert course equips you with practical skills and knowledge to excel in machine learning and generative AI.",
    amount: "₹ 4,999",
  },
  {
    id: "2",
    courseName: "Machine Learning and Generative AI course",
    courseDetail:
      "The codeaiXpert course equips you with practical skills and knowledge to excel in machine learning and generative AI.",
    amount: "₹ 4,999",
  },
  {
    id: "3",
    courseName: "Machine Learning and Generative AI course",
    courseDetail:
      "The codeaiXpert course equips you with practical skills and knowledge to excel in machine learning and generative AI.",
    amount: "₹ 4,999",
  },
  {
    id: "4",
    courseName: "Machine Learning and Generative AI course",
    courseDetail:
      "The codeaiXpert course equips you with practical skills and knowledge to excel in machine learning and generative AI.",
    amount: "₹ 4,999",
  },
  {
    id: "5",
    courseName: "Machine Learning and Generative AI course",
    courseDetail:
      "The codeaiXpert course equips you with practical skills and knowledge to excel in machine learning and generative AI.",
    amount: "₹ 4,999",
  },
  {
    id: "6",
    courseName: "Machine Learning and Generative AI course",
    courseDetail:
      "The codeaiXpert course equips you with practical skills and knowledge to excel in machine learning and generative AI.",
    amount: "₹ 4,999",
  },
];

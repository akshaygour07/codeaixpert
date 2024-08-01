import React from "react";
import Cart from "./Cart";

export default function MostPopularCourse() {
  return (
    <div className="flex flex-col gap-10 px-10 py-5 w-full">
      <div className="flex flex-col md:text-start text-center md:px-20 py-2 gap-5">
        <div className="md:text-5xl text-3xl font-semibold">
          <span className="text-black">Most </span>
          <span className="text-blue-700">Popular Course</span>
        </div>
        <div className="md:text-2xl text-lg text-gray-700">
          Various versions have evolved over the years, sometimes by accident.
        </div>
      </div>
      <div className="flex w-full flex-wrap justify-center gap-10 py-5">
        {dataCourses.map((course) => {
          return (
            <Cart
              key={course.id}
              title={course.courseName}
              description={course.courseDetail}
              amount={course.amount}
            />
          );
        })}
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

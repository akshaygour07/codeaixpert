import React from "react";
import Slider from "react-slick";
import StudentCart from "./StudentCart.jsx";
import Student1 from "../assets/images/student1.png";
import Student2 from "../assets/images/student2.png";
import Student3 from "../assets/images/student3.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Student() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="success flex flex-col w-[2280px] h-[947px] items-center gap-[100px] px-[108px] py-[102px] relative bg-[#eef1f2]">
      <div className="flex flex-col w-[1408px] items-start gap-[100px] mb-[-42.00px] relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-transparent text-[74px] tracking-[-1.10px] leading-[normal]">
              <span className="text-[#06241b] tracking-[-1.10px]">
                Meet Our{" "}
              </span>
              <span className="text-[#0166fe] tracking-[-1.10px]">
                Successful
              </span>
              <span className="text-[#06241b] tracking-[-1.10px]">
                {" "}
                Students
              </span>
            </p>
          </div>
          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#333333] text-[32px] tracking-[0] leading-7 whitespace-nowrap">
              Below you&#39;ll find our students who are working on the lead
              tech companies
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[70px] self-stretch w-full relative">
          <div className="slider-container items-center gap-[30px] relative self-stretch w-full whitespace-nowrap">
            <Slider {...settings}>
              {dataStudent.map((student) => {
                return (
                  <StudentCart
                    studentName={student.name}
                    jobDescription={student.job}
                    studentImage={student.image}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

const dataStudent = [
  {
    id: "1",
    name: "Deme Sai Kiran",
    job: "Data Scientist @ Samsung",
    image: Student1,
  },
  {
    id: "2",
    name: "Abhishek Kumar",
    job: "Software Engineer @ Druva",
    image: Student2,
  },
  {
    id: "3",
    name: "Chinmoyee Mohapatra",
    job: "Software Engineer @ ServiceNow",
    image: Student3,
  },
  {
    id: "4",
    name: "Deme Sai Kiran",
    job: "Data Scientist @ Samsung",
    image: Student1,
  },
  {
    id: "5",
    name: "Abhishek Kumar",
    job: "Software Engineer @ Druva",
    image: Student2,
  },
  {
    id: "6",
    name: "Chinmoyee Mohapatra",
    job: "Software Engineer @ ServiceNow",
    image: Student3,
  },
  {
    id: "7",
    name: "Deme Sai Kiran",
    job: "Data Scientist @ Samsung",
    image: Student1,
  },
  {
    id: "8",
    name: "Deme Sai Kiran",
    job: "Data Scientist @ Samsung",
    image: Student1,
  },
];

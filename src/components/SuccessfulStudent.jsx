import React from "react";
import Slider from "react-slick";
import Student1 from "../assets/images/student1.png";
import Student2 from "../assets/images/student2.png";
import Student3 from "../assets/images/student3.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Student() {
  let settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: false,
          cssEase: "linear",
        },
      },
    ],
  };
  return (
    <div className="p-10 w-full">
      <div className="flex flex-col gap-2 md:px-10 p-5 bg-gray-200">
        <div className="flex flex-col md:text-start text-center md:px-10 py-2">
          <div className="p-2 md:text-5xl text-3xl font-semibold">
            <p className="text-black">
              Meet Our<span className="text-blue-700"> Successful </span>
              Students
            </p>
          </div>
          <div className="p-2 md:text-2xl text-lg text-gray-700">
            Below you&#39;ll find our students who are working on the lead tech
            companies
          </div>
        </div>
        <div className="flex items-center gap-10 py-10 md:px-20">
          <div className="w-full items-center">
            <Slider {...settings}>
              {dataStudent.map((student) => {
                return (
                  <div key={student.id} className="pb-[50px]">
                    <div className="inline-flex items-start p-4 bg-white rounded-[20px]">
                      <div className="flex flex-col items-start gap-3">
                        <img
                          className="w-[234px] h-[234px] rounded-lg"
                          src={student.image}
                        />
                        <div className="[font-family:'Public_Sans-Medium',Helvetica] font-medium text-[#1b1d1f] text-[22px]">
                          {student.name}
                        </div>

                        <div className="[font-family:'Public_Sans-Regular',Helvetica] font-normal text-[#363a3d] text-[15px]">
                          {student.job}
                        </div>
                      </div>
                    </div>
                  </div>
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

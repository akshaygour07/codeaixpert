import React from "react";
import Slider from "react-slick";
import FeedbackCart from "./FeedbackCart";
import Student1 from "../assets/images/student1.png";
import Student2 from "../assets/images/student2.png";
import Student3 from "../assets/images/student3.png";
import Student4 from "../assets/images/student4.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Feedback() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="flex flex-col w-[2280px] items-center justify-center gap-2.5 px-[108px] py-[102px] relative bg-white">
      <div className="inline-flex flex-col items-start gap-[61px] relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto]">
          <p className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-transparent text-[74px] tracking-[0] leading-[48px]">
            <span className="text-[#06241b]">Student </span>
            <span className="text-[#0166fe]">Feedback</span>
          </p>
          <p className="relative self-stretch [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#333333] text-xl tracking-[0] leading-7">
            Below you&#39;ll get some fantastic reviews from our students. They
            also told about our future planning.
          </p>
        </div>
        <div className="inline-flex flex-col items-end justify-end gap-[60px] relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
            <div className="w-[1352px] items-center gap-10 relative">
              <Slider {...settings}>
                {dataFeedback.map((feedback) => {
                  return (
                    <FeedbackCart
                      studentPicture={feedback.image}
                      studentName={feedback.name}
                      studentJob={feedback.job}
                      studentFeedback={feedback.review}
                    />
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const dataFeedback = [
  {
    id: "1",
    name: "Priyanka Gour",
    job: "Data Scientist @ Progress",
    review:
      "I am thoroughly impressed with this course as a data scientist. The curriculum is exceptionally comprehensive, keeping pace with the latest tools and methodologies in the field. Through engaging practical exercises and real-world projects, my analytical skills have been significantly sharpened. This course is indispensable for anyone aiming to excel in the dynamic field of data science.",
    image: Student1,
  },
  {
    id: "2",
    name: "Deme Sai Kiran",
    job: "Data Scientist @ Samsung",
    review:
      "This course is a gem for aspiring data scientists like myself. It provided a structured approach to learning complex algorithms and statistical techniques, all while emphasizing practical application. The insights gained here have not only boosted my confidence but also opened doors to new career opportunities. Highly recommended for anyone passionate about data-driven decision making.",
    image: Student2,
  },
  {
    id: "3",
    name: "Chinmoyee Mohapatra",
    job: "Software Engineer @ ServiceNow",
    review:
      "As a seasoned developer, I can confidently say this course is top-tier. It not only refreshed my understanding of modern software development practices but also introduced me to advanced techniques that have directly impacted my projects. Highly recommend it for anyone serious about staying ahead in the tech industry.",
    image: Student3,
  },
  {
    id: "4",
    name: "Abhishek Kumar",
    job: "Software Engineer @ Druva",
    review:
      "As a seasoned developer, I can confidently say this course is top-tier. It not only refreshed my understanding of modern software development practices but also introduced me to advanced techniques that have directly impacted my projects. Highly recommend it for anyone serious about staying ahead in the tech industry.",
    image: Student4,
  },
];

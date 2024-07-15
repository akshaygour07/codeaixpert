import React, { useState } from "react";
import downSvg from "../assets/icons/down.svg";
import upSvg from "../assets/icons/up.svg";
import downArrow from "../assets/icons/downarrow.svg";
import bgFaq from "../assets/images/faq-bg.png";

export default function Faq() {
  return (
    <div
      style={{ backgroundImage: `url(${bgFaq})` }}
      className="faq flex flex-col w-[1519px] gap-2.5 p-[105px] relative bg-cover bg-[50%_50%]"
    >
      <div className="inline-flex flex-col justify-center items-center relative gap-10 p-[60px] bg-[#0166fe] rounded-3xl  ">
        {dataQnA.map((data) => {
          return <QnA question={data.question} answer={data.answer} />;
        })}

        <div className="inline-flex gap-4 items-center relative">
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
  );
}

function QnA({ question, answer }) {
  const [ans, setAns] = useState(false);

  function handleClick() {
    setAns((ans) => !ans);
  }

  return (
    <div className="gap-4 flex flex-col items-start px-0 py-4 relative self-stretch border-b-[1.5px] [border-bottom-style:solid] border-[#ebebeb]">
      <div className="flex justify-between w-full items-center relative">
        <p className="w-fit [font-family:'Montserrat-SemiBold',Helvetica] text-[23px] relative text-neutral-50 whitespace-nowrap">
          {question}
        </p>
        <button onClick={handleClick}>
          <img
            className="relative w-4 h-4"
            alt="Icon chevron"
            src={ans ? upSvg : downSvg}
          />
        </button>
      </div>
      {ans && (
        <div className="flex gap-[100px] self-stretch w-full items-center relative flex-[0_0_auto]">
          <p className="flex-1 [font-family:'Montserrat-Medium',Helvetica] font-normal text-[18px] relative text-neutral-50">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

const dataQnA = [
  {
    id: "1",
    question:
      "What are some common machine learning algorithms used in data science?",
    answer:
      "A data science project usually involves steps such as data collection, data cleaning, exploratory data analysis (EDA), feature engineering, model building, evaluation, and deployment.",
  },
  {
    id: "2",
    question:
      "Do you have any experience with distributed systems technologies (including cloud)?",
    answer:
      "In the simplest sense, distributed systems include any technologies involving several computers coming together to work as if they are a single system. They rely on shared states and operate concurrently, though a single failure won't bring down the entire system.",
  },
  {
    id: "3",
    question:
      "Can you describe the software development lifecycle (SDLC) and your experience with it?",
    answer:
      "The stages of the software development life cycle are Planning, Requirements gathering and analysis, Design, Coding and implementation, Testing, Deployment and Maintenance",
  },
  {
    id: "4",
    question:
      "Do you have any experience with version control systems like Git, and how do you utilize them in your projects?",
    answer:
      "Version control system like Git is a DevOps tool used to track revisions, solve integration conflicts in code, and manage different artifacts involved in software projects.",
  },
];

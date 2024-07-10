import VectorImg from "../assets/images/vector.png";

export default function FeedbackCart({
  studentName,
  studentJob,
  studentFeedback,
  studentPicture,
}) {
  return (
    <div className="w-[648px] relative h-[410px]">
      <div className="relative w-[648px] h-[310px] rounded-[30px]">
        <div className="absolute w-[592px] h-[238px] top-7 left-7 blur-[100px] opacity-[0.24]" />
        <div className="absolute w-[648px] h-[294px] top-0 left-0 bg-[#eef1f2] rounded-[30px]">
          <img
            className="absolute w-11 h-8 top-5 left-[572px]"
            src={VectorImg}
            alt="Image of student"
          />
        </div>

        <div className="absolute w-[584px] h-12 top-[154px] left-8">
          <p className="absolute w-[584px] h-12 -top-px left-0 font-body-regular-400 text-[#363a3d]">
            {studentFeedback}
          </p>
        </div>
        <div className="inline-flex flex-col h-16 items-start gap-2 absolute top-[35px] left-[150px]">
          <div className="relative w-fit text-[35px] font-semibold text-black whitespace-nowrap">
            {studentName}
          </div>
          <div className="relative w-fit font-body-regular-400 text-[20px] text-black whitespace-nowrap">
            {studentJob}
          </div>
        </div>
        <img
          className="absolute w-[90px] h-[90px] top-8 left-8 rounded-full object-cover"
          alt="Rectangle"
          src={studentPicture}
        />
      </div>
    </div>
  );
}

import VectorImg from "../assets/images/vector.png";

export default function FeedbackCart({
  studentName,
  studentJob,
  studentFeedback,
  studentPicture,
}) {
  return (
    <div className="relative w-[600px] h-[350px] rounded-[30px]">
      <div className="absolute w-[600px] h-[294px] top-0 left-0 bg-[#eef1f2] rounded-[30px]">
        <img
          className="absolute w-11 h-8 top-5 left-[522px]"
          src={VectorImg}
          alt="Image of inverted comma"
        />
      </div>

      <div className="absolute w-[550px] h-12 top-[124px] left-8">
        <p className="absolute w-[550px] h-12 font-body-regular-400 text-[#363a3d]">
          {studentFeedback}
        </p>
      </div>
      <div className="inline-flex flex-col h-12 items-start absolute top-[25px] left-[150px]">
        <div className="relative w-fit text-[30px] font-semibold text-black whitespace-nowrap">
          {studentName}
        </div>
        <div className="relative w-fit font-body-regular-400 text-[20px] text-black whitespace-nowrap">
          {studentJob}
        </div>
      </div>
      <img
        className="absolute w-[90px] h-[90px] top-6 left-8 rounded-full object-cover"
        alt="Rectangle"
        src={studentPicture}
      />
    </div>
  );
}

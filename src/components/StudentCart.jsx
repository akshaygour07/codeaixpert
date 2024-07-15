export default function StudentCart({
  studentName,
  jobDescription,
  studentImage,
}) {
  return (
    <div className="pb-[50px]">
      <div className="inline-flex items-start p-4 relative bg-white rounded-[20px] overflow-hidden shadow-[0px_0px_4px_#0000001a]">
        <div className="inline-flex flex-col items-start gap-3 relative">
          <img
            className="relative w-[234px] h-[234px] rounded-lg bg-cover bg-[50%_50%]"
            src={studentImage}
          />
          <div className="flex flex-col items-start self-stretch w-full relative">
            <div className="flex items-center justify-center gap-2.5 self-stretch w-full relative">
              <div className="relative w-[234px] [font-family:'Public_Sans-Medium',Helvetica] font-medium text-[#1b1d1f] text-[22px]">
                {studentName}
              </div>
            </div>
            <div className="flex items-start self-stretch w-full relative">
              <div className="relative w-[234px][font-family:'Public_Sans-Regular',Helvetica] font-normal text-[#363a3d] text-[15px]">
                {jobDescription}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

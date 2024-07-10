export default function StudentCart({
  studentName,
  jobDescription,
  studentImage,
}) {
  return (
    <div className="inline-flex items-start gap-2.5 p-6 relative flex-[0_0_auto] bg-white rounded-[20px] overflow-hidden shadow-[0px_0px_4px_#0000001a]">
      <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
        <img
          className="relative w-[274px] h-[274px] rounded-lg bg-cover bg-[50%_50%]"
          src={studentImage}
        />
        <div className="flex flex-col items-start gap-[25px] self-stretch w-full relative flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-2.5 self-stretch w-full relative flex-[0_0_auto]">
            <div className="flex items-center justify-center gap-2.5 self-stretch w-full relative flex-[0_0_auto]">
              <div className="relative w-[270px] mt-[-1.00px] [font-family:'Public_Sans-Medium',Helvetica] font-medium text-[#1b1d1f] text-2xl tracking-[0] leading-[normal]">
                {studentName}
              </div>
            </div>
            <div className="flex items-center justify-center gap-2.5 self-stretch w-full relative flex-[0_0_auto]">
              <div className="relative w-[270px] mt-[-1.00px] [font-family:'Public_Sans-Regular',Helvetica] font-normal text-[#363a3d] text-lg tracking-[0] leading-[normal]">
                {jobDescription}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

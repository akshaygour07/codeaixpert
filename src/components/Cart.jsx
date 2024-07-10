import cartImage from "../assets/images/course-cart.png";
import starImage from "../assets/images/star.png";
import arrowUpRight from "../assets/images/arrow.png";

export default function Cart({ title, description, amount }) {
  return (
    <div className="gap-5 p-10 relative bg-white rounded-[20px] overflow-hidden">
      <article className="flex flex-col items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex flex-col items-end justify-end gap-6 relative flex-[0_0_auto]">
          <img
            className="relative w-[400px] h-[270.31px] rounded-lg overflow-hidden bg-cover bg-[50%_50%]"
            src={cartImage}
            alt="Image of courses"
          />
        </div>

        <div className="flex flex-col items-start gap-2.5 relative">
          <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative w-[400px] mt-[-1.00px] [font-family:'Public_Sans-Medium',Helvetica] font-medium text-[#1b1d1f] text-2xl tracking-[0] leading-[normal]">
              {title}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative w-[400px] mt-[-1.00px] [font-family:'Public_Sans-Regular',Helvetica] font-normal text-[#363a3d] text-lg tracking-[0] leading-[normal]">
              {description}
            </p>
          </div>
        </div>

        <div className="inline-flex items-center justify-center gap-[5px] relative">
          <img
            className="relative w-[140px] h-[35px] flex-[0_0_auto]"
            src={starImage}
            alt="Five start image"
          />
          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Public_Sans-SemiBold',Helvetica] font-semibold text-[#52565c] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              (102)
            </div>
          </div>
        </div>
      </article>
      <div className="flex items-center justify-between top-5 relative">
        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          <div className="relative w-fit [font-family:'Public_Sans-SemiBold',Helvetica] font-semibold text-[#1b1d1f] text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
            {amount}
          </div>
        </div>
        <button className="!relative !flex-[0_0_auto]">
          <div>
            <img
              className="relative w-12 h-12"
              alt="arrow up right"
              src={arrowUpRight}
            />
          </div>
        </button>
      </div>
    </div>
  );
}

import cartImage from "../assets/images/course-cart.png";
import starImage from "../assets/images/star.png";
import arrowUpRight from "../assets/images/arrow.png";

export default function Cart({ title, description, amount }) {
  return (
    <div className="p-5 relative w-[402px] rounded-2xl bg-white rounded-[20px} ">
      <article className="flex flex-col items-start gap-[20px] relative">
        <div className="inline-flex flex-col items-end justify-end gap-6 relative">
          <img
            className="relative w-[362px] h-[240px] rounded-lg overflow-hidden bg-cover bg-[50%_50%]"
            src={cartImage}
            alt="Image of courses"
          />
        </div>

        <div className="flex flex-col items-start gap-2.5 relative">
          <div className="flex items-start justify-center gap-2.5 relative">
            <p className="relative w-[362px] [font-family:'Public_Sans-Medium',Helvetica] font-medium text-[#1b1d1f] text-2xl">
              {title}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative w-[362px]  [font-family:'Public_Sans-Regular',Helvetica] font-normal text-[#363a3d] text-lg">
              {description}
            </p>
          </div>
        </div>

        <div className="inline-flex items-center justify-center bottom-3 gap-[5px] relative">
          <img
            className="relative w-[140px] h-[35px] flex-[0_0_auto]"
            src={starImage}
            alt="Five start image"
          />
          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-fit [font-family:'Public_Sans-SemiBold',Helvetica] font-semibold text-[#52565c] text-base ">
              (102)
            </div>
          </div>
        </div>
      </article>
      <div className="flex items-center justify-between m-2 relative">
        <div className="relative w-fit [font-family:'Public_Sans-SemiBold',Helvetica] font-semibold text-[#1b1d1f] text-[32px] whitespace-nowrap">
          {amount}
        </div>
        <button className="!relative !flex-[0_0_auto]">
          <img
            className="relative w-12 h-12"
            alt="arrow up right"
            src={arrowUpRight}
          />
        </button>
      </div>
    </div>
  );
}

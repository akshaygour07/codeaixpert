import cartImage from "../assets/images/course-cart.png";
import starImage from "../assets/images/star.png";
import arrowUpRight from "../assets/images/arrow.png";

export default function Cart({ title, description, amount }) {
  return (
    <div className="p-2 flex flex-col rounded-2xl bg-white shadow-2xl focus:shadow-outline">
      <img
        className="w-[370px] h-[250px] rounded-lg"
        src={cartImage}
        alt="Image of courses"
      />
      <div className="flex flex-col w-[368px] gap-2 p-2 relative">
        <p className="font-medium text-gray-800 text-xl [font-family:'Public_Sans-Medium',Helvetica]">
          {title}
        </p>
        <p className="font-normal text-[#363a3d] text-md [font-family:'Public_Sans-Regular',Helvetica]">
          {description}
        </p>
      </div>
      <div className="flex gap-3 px-1 relative">
        <img
          className="w-[140px] h-[30px]"
          src={starImage}
          alt="Five start image"
        />
        <div className="font-semibold mt-[4px] text-[#52565c] [font-family:'Public_Sans-SemiBold',Helvetica] ">
          (102)
        </div>
      </div>
      <div className="mx-2 my-2 border border-gray-400"></div>
      <div className="flex items-center justify-between p-2">
        <div className="font-bold text-[#1b1d1f] text-[32px]">{amount}</div>
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

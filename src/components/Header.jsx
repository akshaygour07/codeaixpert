import React from "react";
import logo from "../assets/images/header-logo.png";

export default function Header() {
  const tabBoxClass =
    "inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]";
  const tabTextClass =
    "relative w-fit [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#010100] text-xl whitespace-nowrap";

  return (
    <div className="flex w-[2200px] items-center justify-evenly gap-20 relative">
      <div className="inline-flex items-center gap-2.5 py-20 relative flex-[0_0_auto]">
        <img className="relative h-[80px]" src={logo} />
      </div>

      <div className="inline-flex items-center gap-[102px] relative flex-[0_0_auto]">
        <div className="inline-flex items-center justify-center gap-[72px] relative flex-[0_0_auto]">
          <div className={tabBoxClass}>
            <button className={tabTextClass}>Home</button>
          </div>

          <div className={tabBoxClass}>
            <button className={tabTextClass}>Courses</button>
          </div>

          <div className={tabBoxClass}>
            <button className={tabTextClass}>Success</button>
          </div>

          <div className={tabBoxClass}>
            <button className={tabTextClass}>FAQ</button>
          </div>
        </div>

        <div className="inline-flex items-start gap-8 relative flex-[0_0_auto]">
          <div className="flex w-[142px] items-center justify-center gap-2.5 px-6 py-4 relative bg-white border-2 border-solid border-[#0166fe]">
            <div className="relative w-fit mt-[-2.00px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#010100] text-xl tracking-[0.40px] leading-[normal] whitespace-nowrap">
              Login
            </div>
          </div>
          <div className="flex w-[142px] items-center justify-center gap-2.5 px-6 py-4 relative bg-[#0166fe]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-xl tracking-[0.40px] leading-[normal] whitespace-nowrap">
              Signup
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

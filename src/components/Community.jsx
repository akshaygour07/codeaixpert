import React from "react";
import BgCommunity from "../assets/images/community-bg.png";

export default function Community() {
  return (
    <div className="relative w-[1519px] h-[984px]">
      <div
        style={{ backgroundImage: `url(${BgCommunity})` }}
        className="relative h-[884px] my-[100px] mx-[80px] rounded-2xl bg-[100%_100%]"
      >
        <div className="relative w-[660px] h-[700px] top-[106px] left-[109px] backdrop-blur-md bg-white/50 rounded-3xl overflow-hidden">
          <div className="flex flex-col items-start gap-7 relative py-[55px] px-[55px]">
            <p className="relative w-fit [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#111111] text-5xl leading-[64px]">
              Ready to Join
              <br />
              Our Community?
            </p>
            <p className="relative [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#333333] w-fit text-xl">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <form className="inline-flex flex-col items-center justify-end gap-4 relative flex-[0_0_auto]">
              <div className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]">
                <div className="w-[270px] flex flex-col items-start gap-1 relative">
                  <div className="relative self-stretch w-full h-[27px]">
                    <label
                      className="absolute [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#333] text-base"
                      htmlFor="name"
                    >
                      First Name
                    </label>
                  </div>

                  <div className="relative self-stretch w-full h-11 rounded-xl overflow-hidden border border-solid border-[#66666659]">
                    <input
                      className="absolute w-full py-2 px-3 text-[#333333] text-base outline-none bg-transparent"
                      id="name"
                      type="text"
                      placeholder="Enter your first name"
                    />
                  </div>
                </div>
                <div className="w-[270px] flex flex-col items-start gap-1 relative">
                  <div className="relative self-stretch w-full h-[27px]">
                    <label
                      className="absolute [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#333] text-base"
                      htmlFor="name"
                    >
                      Last Name
                    </label>
                  </div>

                  <div className="relative self-stretch w-full h-11 rounded-xl overflow-hidden border border-solid border-[#66666659]">
                    <input
                      className="absolute py-2 px-3 text-[#333333] text-base bg-transparent outline-none"
                      id="name"
                      type="text"
                      placeholder="Enter your Last name"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[550px] flex flex-col items-start gap-1 relative">
                <div className="relative self-stretch w-full h-[27px]">
                  <label
                    className="absolute [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#333] text-base"
                    htmlFor="name"
                  >
                    Email address
                  </label>
                </div>

                <div className="relative self-stretch w-full h-11 rounded-xl overflow-hidden border border-solid border-[#66666659]">
                  <input
                    className="absolute py-2 px-3 text-[#333333] text-base bg-transparent outline-none"
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="w-[550px] flex flex-col items-start gap-1 relative">
                <div className="relative self-stretch w-full h-[27px]">
                  <label
                    className="absolute [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#333] text-base"
                    htmlFor="name"
                  >
                    Message
                  </label>
                </div>

                <div className="relative self-stretch w-full h-11 rounded-xl overflow-hidden border border-solid border-[#66666659]">
                  <textarea
                    className="absolute py-2 px-3 text-[#333333] text-base bg-transparent outline-none"
                    id="message"
                    type="text"
                    placeholder="Write your Message"
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button className="w-[550px] h-11 bg-blue-500 hover:bg-blue-700 text-white text-xl font-semibold py-2 px-4 mt-2 rounded-full focus:outline-none focus:shadow-outline">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

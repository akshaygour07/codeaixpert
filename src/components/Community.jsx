import React from "react";

export default function Community() {
  return (
    <div className="relative w-[2280px] h-[1184px]">
      <div className="relative w-[2080px] h-[1000px] top-[100px] mx-[100px] rounded-3xl bg-stone-300 bg-[url(../assets/images/community-bg.png)] bg-[100%_100%]">
        <div className="relative w-[761px] h-[789px] top-[106px] left-[249px] backdrop-blur-sm bg-white/30 rounded-3xl overflow-hidden">
          <div className="flex flex-col items-start gap-12 relative top-[75px] left-[75px]">
            <p className="relative w-fit [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#111111] text-5xl leading-[64px]">
              Ready to Join
              <br />
              Our Community?
            </p>
            <p className="relative w-[610px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#333333] text-xl">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <form className="inline-flex flex-col items-center justify-end gap-6 relative flex-[0_0_auto]">
              <div className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]">
                <div className="w-[300px] flex flex-col items-start gap-1 relative">
                  <div className="relative self-stretch w-full h-[27px]">
                    <label
                      className="absolute [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#333] text-base"
                      htmlFor="name"
                    >
                      First Name
                    </label>
                  </div>

                  <div className="relative self-stretch w-full h-14 rounded-xl overflow-hidden border border-solid border-[#66666659]">
                    <input
                      className="absolute w-full py-3 px-3 text-[#333333] text-base outline-none bg-transparent"
                      id="name"
                      type="text"
                      placeholder="Enter your first name"
                    />
                  </div>
                </div>
                <div className="w-[300px] flex flex-col items-start gap-1 relative">
                  <div className="relative self-stretch w-full h-[27px]">
                    <label
                      className="absolute [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#333] text-base"
                      htmlFor="name"
                    >
                      Last Name
                    </label>
                  </div>

                  <div className="relative self-stretch w-full h-14 rounded-xl overflow-hidden border border-solid border-[#66666659]">
                    <input
                      className="absolute py-3 px-3 text-[#333333] text-base bg-transparent outline-none"
                      id="name"
                      type="text"
                      placeholder="Enter your Last name"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[610px] flex flex-col items-start gap-1 relative">
                <div className="relative self-stretch w-full h-[27px]">
                  <label
                    className="absolute [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#333] text-base"
                    htmlFor="name"
                  >
                    Email address
                  </label>
                </div>

                <div className="relative self-stretch w-full h-14 rounded-xl overflow-hidden border border-solid border-[#66666659]">
                  <input
                    className="absolute py-3 px-3 text-[#333333] text-base bg-transparent outline-none"
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="w-[610px] flex flex-col items-start gap-1 relative">
                <div className="relative self-stretch w-full h-[27px]">
                  <label
                    className="absolute [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#333] text-base"
                    htmlFor="name"
                  >
                    Message
                  </label>
                </div>

                <div className="relative self-stretch w-full h-14 rounded-xl overflow-hidden border border-solid border-[#66666659]">
                  <textarea
                    className="absolute py-3 px-3 text-[#333333] text-base bg-transparent outline-none"
                    id="message"
                    type="text"
                    placeholder="Write your Message"
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="w-[610px] h-14 bg-blue-500 hover:bg-blue-700 text-white text-xl font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                  type="button"
                >
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

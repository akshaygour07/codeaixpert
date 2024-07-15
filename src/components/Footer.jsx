import logo from "../assets/images/logo.png";
import footerBar from "../assets/images/footer-bar.png";
export default function Footer() {
  return (
    <div className="w-[1519px] h-[700px] flex flex-col justify-start items-center">
      <img className="relative w-[100px] h-[100px]" src={logo} />
      <div className="relative w-fit [font-family:'Iceland-Regular',Helvetica] font-normal text-[#010100] text-[42px] whitespace-nowrap">
        CodeaiXpert
      </div>
      <p className="relative w-[672px] pt-[52px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-black text-xl text-center leading-[25px]">
        CodeKart Solution Private Limited <br />
        Phase-1, Saraswati Vihar, Duplex Number-2,
        <br />
        Backside of Mani Tribhuvan
        <br />
        Bhubaneswar, Odisha 751024
      </p>
      <div className="relative top-[180px] w-[1519px] h-[148px] pb-10">
        <img className="relative  w-[1519px] h-[148px]" src={footerBar} />
      </div>
    </div>
  );
}

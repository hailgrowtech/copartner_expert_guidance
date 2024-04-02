import React from "react";
import { tick } from "../assets";

const Signup = () => {
  return (
    <div className="p-[1.5rem] flex flex-col gap-[1rem] w-full h-full">
      {/* Login Card */}
      <div className="w-[340px] h-[285px] bg-[#06030E] border border-[#18181B] rounded-[10px] px-6 flex flex-col gap-[3rem] justify-around">
        <div className="w-[264px] h-[60px] flex flex-col items-center text-center text-lightWhite p-6">
          <span className="w-[53px] h-[24px] font-[500] text-[20px] leading-[24px]">
            Login
          </span>
          <span className="w-[264px] h-[34px] font-[400] text-[14.4px] leading-[17px]">
            Access your account by entering your credentials.
          </span>
        </div>

        <div className="w-[290px] h-[115px] flex flex-col justify-between">
          <div className="w-[290px] h-[50px]">
            <input
              type="text"
              placeholder="Enter your Mobile Number"
              className="bg-[#06030E] rounded-[10px] border border-[#18181B] w-full h-full text-white font-[400] text-[14px] p-2"
            />
          </div>

          <button className="w-[290px] h-[50px] bg-white font-[500] text-[16px] leading-[20px] text-center rounded-[10px]">
            Continue
          </button>
        </div>
      </div>

      {/* OTP Card */}
      <div className="w-[340px] h-[285px] bg-[#06030E] border border-[#18181B] rounded-[10px] px-6 flex flex-col gap-[3rem] justify-around">
        <div className="w-[293px] h-[60px] flex flex-col items-center text-center text-lightWhite p-6">
          <span className="w-[155px] h-[24px] font-[500] text-[20px] leading-[24px]">
          OTP Verification
          </span>
          <span className="w-[293px] h-[34px] font-[400] text-[14.4px] leading-[17px]">
          Enter the verification code we just send on your mobile number
          </span>
        </div>

        <div className="w-[290px] h-[115px] flex flex-col justify-between">
          <div className="w-[290px] h-[50px]">
            <input
              type="text"
              placeholder="Enter your Mobile Number"
              className="bg-[#06030E] rounded-[10px] border border-[#18181B] w-full h-full text-white font-[400] text-[14px] p-2"
            />
          </div>

          <button className="w-[290px] h-[50px] bg-white font-[500] text-[16px] leading-[20px] text-center rounded-[10px]">
            Continue
          </button>
        </div>
      </div>

      {/* Verification Card */}
      <div className="w-[340px] h-[285px] bg-[#06030E] border border-[#18181B] rounded-[10px] px-6 flex flex-col gap-[3rem] justify-around">
        <div className="w-[293px] h-[60px] flex flex-col items-center text-center text-lightWhite p-6">
          <span className="w-[155px] h-[24px] font-[500] text-[20px] leading-[24px]">
          Verification
          </span>
          <span className="w-[293px] h-[34px] font-[400] text-[14.4px] leading-[17px]">
          Enter the verification code we just send on your mobile number
          </span>
        </div>

        <div className="flex justify-center">
        <img src={tick} alt="Done" className="w-[87px] h-[87px]" />
        </div>
      </div>
    </div>
  );
};

export default Signup;

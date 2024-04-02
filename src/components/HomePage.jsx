import React from "react";
import { logo, bckGroundImg } from "../assets";
import { commodity_data, stock_data } from "../constants";
import Testimonials from "./Testimonials";

const HomePage = () => {

  const handleClickLink = () => {
    
  }

  return (
    <>
      <div className={`flex md:flex-col flex-col md:px-[33rem] px-[1rem]`}>
        <div className={`flex-col`}>
          <div className="flex flex-col sm:flex-row pt-4">
            <div className="md:w-[0%] w-[100%] flex">
              <img
                src={logo}
                alt="Logo"
                className="md:w-[150px] w-[121px] md:h-[39px] h-[33px]"
              />
            </div>
            <div className="relative flex flex-col py-[2rem] md:w-[50%]">
              <span className="z-10 relative w-[354px] h-[96px] font-[700] text-[22px] leading-[32px] text-gradient">
                Connect with our SEBI-registered research analysts for expert
                guidance
              </span>
              <span className="z-10 relative text-dimWhite font-[500] text-[12px] leading-[16px]">
                Invest, Learn and Earn
              </span>
              <div className="md:w-[50%] md:hidden block absolute inset-0">
                <img
                  src={bckGroundImg}
                  alt="Background"
                  className="w-[80%] object-cover mt-[-4rem] ml-[8rem]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[1rem]">
            {commodity_data.map((commodity) => {
              return (
                <div key={commodity.id}>
                  <div className="md:w-[461px] md:h-[80px] sm:w-[361px] sm:h-[80px] gap-[2rem] rounded-[11px] p-2 relative flex flex-row items-center bg-[#18181B] opacity[50%]">
                    <div className="w-[86px] h-[60px] md:w-[136px] md:h-[66px] relative profile-image mb-2 flex items-center justify-center">
                      <img
                        src={commodity.icon}
                        alt="background"
                        className="absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]"
                      />
                      <img
                        src={commodity.userImg}
                        alt="User"
                        className="absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]"
                      />
                    </div>
                    <div className="flex flex-col w-[78px] h-[29px] justify-between">
                      <h1 className="text-lightWhite font-[500] text-[14px] leading-[11px] w-[78px] h-[12px]">
                        {commodity.userName}
                      </h1>
                      <span className="text-dimWhite font-[400] text-[11px] leading-[13px] w-[60px] h-[13px]">
                        {commodity.commodity}
                      </span>
                    </div>

                    <button onClick = { handleClickLink } className="w-[140px] h-[32px] flex items-center justify-center rounded-[21.5px] border-[0.67px] bg-[#0081F1] border-solid border-[#0081F1] mt-2 md:mt-0">
                      <div className="flex justify-center items-center gap-2">
                        <img
                          src={commodity.telegramIcon}
                          alt="Telegram"
                          className="w-[16px] h-[16px]"
                        />
                        <span className="text-lightWhite flex items-center font-[400] text-[10px] leading-[19px] w-[73px] h-[13px]">
                          {commodity.joinBtn}
                        </span>
                        <img
                          src={commodity.arrow}
                          alt="arrow"
                          className="w-[11px] h-[11px]"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col items-center py-8">
            <span
              className="font-[700] md:text-[50px] text-[30px] md:w-[1114px] md:h-[120px] w-full h-full
          text-gradient-2 md:leading-[60px] leading-[30px] text-center"
            >
              Bridge the Gap between Traders & Analysts with Copartner and Unite
              for Success!
            </span>

            <img
              src={logo}
              alt="LOGO"
              className="md:w-[225px] w-[199px] md:h-[64px] h-[54px] flex items-center justify-center"
            />

            <span className="text-dimWhite md:w-[505px] w-[328px] text-center md:h-[56px] h-[34px] font-[400] md:text-[18px] text-[11px] md:leading-[28px] leading-[17px]">
              Empower your teams to build better processes, for a better
              workplace.
            </span>
          </div>

          <div className="md:w-[1076px] md:h-[100%] w-[337px] h-[1250px] gap-[2rem] md:py-[1rem] py-[1rem] flex flex-col sm:flex-col mx-auto">
            {stock_data.map((stock) => (
              <div
                key={stock.id} style={{ height: stock.height }}
                className="flex flex-col p-2 gap-[1rem] items-center md:w-[337px] md:min-h-[80%] w-[335px] rounded-[11px] hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
              >
                <img
                  src={stock.img}
                  alt="STOCK_IMAGES"
                  className="md:w-[289px] md:h-[151px] w-[288px] h-[150px]"
                />
                <div className="flex flex-col gap-[1rem]">
                  <span className="text-lightWhite md:w-[190px] md:h-[27px] w-[164px] h-[27px] font-[600] md:text-[20px] text-[18px] leading-[27px] sm:text-left">
                    {stock.title}
                  </span>
                  <span className="text-dimWhite w-[257px] h-[96px] text-[16px] font-[400] leading-[24px] text-left">
                    {stock.content}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Testimonials />
    </>
  );
};

export default HomePage;

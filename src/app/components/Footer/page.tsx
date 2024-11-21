import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="mx-auto flex flex-col flex-wrap lg:flex-nowrappt-[140px] pt-[70px] pr-[120px] pb-[20px] pl-[120px] bg-[#043873] text-white">
        <div className="content flex flex-col gap-[50px]">
          <div className="info flex justify-between">
            <div className="logoDescription w-[210px]">
              <img src="/Logo.png" alt="Footer_Logo" className="mb-[10px]" />
              <p className="font-inter text-[15px] font-normal leading-[30px] tracking-[-0.02em] text-left">
                whitepace was created for the new ways we live and work. We make
                a better workspace around the world
              </p>
            </div>
            <div className="info">
              <div>
                <h1 className="font-inter text-[15px] font-bold leading-[21.78px] tracking-[-0.02em] mb-[10px] text-left">
                  Product
                </h1>
                <p className="font-inter text-[15px] font-normal leading-[30px] tracking-[-0.02em] text-left">
                  Overview
                </p>
                <p className="font-inter text-[15px] font-normal leading-[30px] tracking-[-0.02em] text-left">
                  Pricing
                </p>
                <p className="font-inter text-[15px] font-normal leading-[30px] tracking-[-0.02em] text-left">
                  Customer Stories
                </p>
              </div>
            </div>
            <div className="info">
              <div>
                <h1 className="font-inter text-[15px] font-bold leading-[21.78px] tracking-[-0.02em] mb-[10px] text-left">
                  Resources
                </h1>
                <p className="font-inter text-[15px] font-normal leading-[30px] tracking-[-0.02em] text-left">
                  Blog
                </p>
                <p className="font-inter text-[15px] font-normal leading-[30px] tracking-[-0.02em] text-left">
                  Guides & tutorials
                </p>
                <p className="font-inter text-[15px] font-normal leading-[30px] tracking-[-0.02em] text-left">
                  Help center
                </p>
              </div>
            </div>
            <div className="info">
              <div>
                <h1 className="font-inter text-[15px] font-bold leading-[21.78px] tracking-[-0.02em] mb-[10px] text-left">
                  Company
                </h1>
                <p className="font-inter text-[15px] font-normal leading-[30px] tracking-[-0.02em] text-left">
                  About us
                </p>
                <p className="font-inter text-[15px] font-normal leading-[30px] tracking-[-0.02em] text-left">
                  Careers
                </p>
                <p className="font-inter text-[15px] font-normal leading-[30px] tracking-[-0.02em] text-left">
                  Media kit
                </p>
              </div>
            </div>
          </div>
          <div className="btm text-center border-t border-[#2E4E73] pt-[20px]">
            <div>
              <h4>©2021 Whitepace LLC.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

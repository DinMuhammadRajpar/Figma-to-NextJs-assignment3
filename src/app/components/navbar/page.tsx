import React from "react";
import Image from "next/image";

const Header = ({ className = "" }) => {
  return (
    <div>
      <div className="header bg-[#043873] w-full px-[120px] py-2 flex justify-between items-center">
        <div className="logo w-[150px] h-auto">
          <div className="logo_img">
            <img src="/logo.png" alt="Logo" />
          </div>
        </div>
        <div className="frame w-[590px] flex justify-between items-center text-white">
          <div className="nav-menu flex list-none gap-8">
            {/* <ul> */}
            <li className="text-[14px] font-medium leading-[11px]">
              <a href="#">Products</a>
            </li>
            <li className="text-[14px] font-medium leading-[11px]">
              <a href="#"></a>Solutions
            </li>
            <li className="text-[14px] font-medium leading-[11px]">
              <a href="#"></a>Resources
            </li>
            <li className="text-[14px] font-medium leading-[11px]">
              <a href="#"></a>Pricing
            </li>
            {/* </ul> */}
          </div>
          <div className="btn">
            <button className="btn-login h-[50px] w-auto gap-[24px] px-8 py-2 gap-2 rounded-lg bg-[#FFE492] text-[14px] font-medium leading-[11px] text-black">
              Login
            </button>
            {/* <button className="btn-login h-[60px] w-auto gap-[24px] border-2 border-solid px-10 py-[24px] gap-2 rounded-lg bg-[#4F9CF9]"></button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

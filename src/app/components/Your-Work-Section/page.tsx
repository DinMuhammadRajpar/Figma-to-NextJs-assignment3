import React from "react";

const YourWorkSection = () => {
  return (
    <div className="text-white bg-[#043873]">
      <div className="mx-auto flex flex-wrap lg:flex-nowrap gap-4 px-[120px] py-[70px] items-center justify-center">
        <div className="heading w-[70%] flex flex-col items-center gap-[35px]">
          <div className="text-block">
            <h1 className="font-inter text-[3.3rem] font-bold leading-[77.45px] tracking-[-0.02em] text-center decoration-skip-ink">Your work, everywhere you are</h1>
            <p className="font-inter text-[0.9rem] font-normal leading-[30px] tracking-[-0.02em] text-center decoration-skip-ink">
              Access your notes from your computer, phone or tablet by
              synchronising with various services, including whitepace, Dropbox
              and OneDrive. The app is available on Windows, macOS, Linux,
              Android and iOS. A terminal app is also available!
            </p>
          </div>
          <div className="btn text-center p-[12px] bg-[#4F9CF9] rounded-[8px]  w-[150px] flex items-center justify-center">
                <a
                  href="#"
                  className="font-inter text-[14px] font-medium leading-[23px] tracking-[-0.02em] text-white"
                >
                  Try Taskey
                </a>
              </div>
        </div>
      </div>
    </div>
  );
};

export default YourWorkSection;

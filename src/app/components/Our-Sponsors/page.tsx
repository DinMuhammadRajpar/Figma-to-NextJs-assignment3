import React from "react";

const OurSponsors = () => {
  return (
    <div>
      <div className="mx-auto flex flex-col flex-wrap lg:flex-nowrap gap-16 px-[120px] py-[70px] items-center justify-center">
        <div className="our-sponsor w-[100%]">
          <h1 className="font-inter text-[3.3rem] font-bold leading-[77.45px] tracking-[-0.02em] text-center decoration-skip-ink">
            Our sponsors
          </h1>
        </div>
        <div className="our-sponsor w-[100%] flex items-center justify-between">
          <div>
            <img src="/Apple.png" alt="Apple" />
          </div>
          <div>
            <img src="/Microsoft.png" alt="Microsoft" />
          </div>
          <div>
            <img src="/Slack.png" alt="Slack" />
          </div>
          <div>
            <img src="/Google.png" alt="Google" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSponsors;

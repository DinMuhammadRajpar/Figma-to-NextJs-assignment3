import Image from "next/image";
import Header from "./components/navbar/page";
import HeroSection from "./components/Hero-Section/page";
import YourWorkSection from "./components/Your-Work-Section/page";
import OurSponsors from "./components/Our-Sponsors/page";
import Footer from "./components/Footer/page";

export default function Home() {
  return (
    <div>
      <Header className="additional-styles" />
      <HeroSection
        className={"text-white bg-[#043873]"}
        leftContent={
          <div>
            <div className="heading flex flex-col gap-10 ">
              <div className="text-block">
                <h1 className="font-inter text-[3.3rem] font-bold leading-[77.45px] tracking-[-0.02em] text-left decoration-skip-ink">
                  Get More Done with whitepace
                </h1>
                <p className="font-inter text-[0.9rem] font-normal leading-[30px] tracking-[-0.02em] text-left decoration-skip-ink">
                  Project management software that enables your teams to
                  collaborate, plan, analyze and manage everyday tasks
                </p>
              </div>
              <div className="btn text-left p-[12px] bg-[#4F9CF9] rounded-[8px]  w-[150px] flex items-center justify-center">
                <a
                  href="#"
                  className="font-inter text-[14px] font-medium leading-[23px] tracking-[-0.02em]"
                >
                  Try Whitepace free
                </a>
              </div>
            </div>
          </div>
        }
        rightContent={<div className="h-[370px] bg-[#C4DEFD]"></div>}
      />

      <HeroSection
        className=""
        leftContent={
          <div>
            <div className="heading flex flex-col gap-6 ">
              <div className="text-block">
                <h1 className="font-inter text-[3.3rem] font-bold leading-[65.45px] tracking-[-0.02em] text-left decoration-skip-ink">
                  Project Management
                </h1>
                <p className="font-inter text-[0.9rem] font-normal leading-[26px] tracking-[-0.02em] text-left decoration-skip-ink">
                  Images, videos, PDFs and audio files are supported. Create
                  math expressions and diagrams directly from the app. Take
                  photos with the mobile app and save them to a note.
                </p>
              </div>
              <div className="btn text-left p-[12px] bg-[#4F9CF9] rounded-[8px]  w-[150px] flex items-center justify-center">
                <a
                  href="#"
                  className="font-inter text-[14px] font-medium leading-[23px] tracking-[-0.02em] text-white"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        }
        rightContent={
          <div className="w-full lg:w-[100%] flex justify-end">
            <div className="h-[320px] bg-[#C4DEFD] w-[90%] "></div>
          </div>
        }
      />

      <HeroSection
        className=""
        leftContent={
          <div>
            <div className="h-[full]">
              <img src="/Work-Together-Image.png" alt="Work Together Img" />
            </div>
          </div>
        }
        rightContent={
          <div className="w-full lg:w-[100%] flex justify-end">
            <div className="heading flex flex-col gap-6 h-[320px] w-[88%] ">
              <div className="text-block">
                <h1 className="font-inter text-[3.3rem] font-bold leading-[77.45px] tracking-[-0.02em] text-left decoration-skip-ink">
                  Work together
                </h1>
                <p className="font-inter text-[0.9rem] font-normal leading-[30px] tracking-[-0.02em] text-left decoration-skip-ink">
                  With whitepace, share your notes with your colleagues and
                  collaborate on them. You can also publish a note to the
                  internet and share the URL with others.
                </p>
              </div>
              <div className="btn text-left p-[12px] bg-[#4F9CF9] rounded-[8px]  w-[150px] flex items-center justify-center">
                <a
                  href="#"
                  className="font-inter text-[14px] font-medium leading-[23px] tracking-[-0.02em] text-white"
                >
                  Try it now
                </a>
              </div>
            </div>
          </div>
        }
      />

      <HeroSection
        className={"text-white bg-[#043873]"}
        leftContent={
          <div>
            <div className="heading flex flex-col gap-10 ">
              <div className="text-block">
                <h1 className="font-inter text-[3.3rem] font-bold leading-[77.45px] tracking-[-0.02em] text-left decoration-skip-ink">
                  Use as Extension
                </h1>
                <p className="font-inter text-[0.9rem] font-normal leading-[30px] tracking-[-0.02em] text-left decoration-skip-ink">
                  Use the web clipper extension, available on Chrome and
                  Firefox, to save web pages or take screenshots as notes.
                </p>
              </div>
              <div className="btn text-left p-[12px] bg-[#4F9CF9] rounded-[8px]  w-[150px] flex items-center justify-center">
                <a
                  href="#"
                  className="font-inter text-[14px] font-medium leading-[23px] tracking-[-0.02em]"
                >
                  Let’s Go
                </a>
              </div>
            </div>
          </div>
        }
        rightContent={
          <div className="w-full lg:w-[100%] flex justify-end">
            <div className="h-[320px] bg-[#C4DEFD] w-[88%] "></div>
          </div>
        }
      />

      <HeroSection
        className=""
        leftContent={
          <div className="w-full lg:w-[100%] flex justify-start">
            <div className="h-[350px] bg-[#C4DEFD] w-[90%] "></div>
          </div>
        }
        rightContent={
          <div className="w-full lg:w-[100%] flex justify-end">
            <div className="heading flex flex-col gap-6 h-[320px] w-[88%] ">
              <div className="text-block">
                <h1 className="font-inter text-[3.3rem] font-bold leading-[77.45px] tracking-[-0.02em] text-left decoration-skip-ink w-[82%]">
                  Customise it to your needs
                </h1>
                <p className="font-inter text-[0.9rem] font-normal leading-[30px] tracking-[-0.02em] text-left decoration-skip-ink">
                  Customise the app with plugins, custom themes and multiple
                  text editors (Rich Text or Markdown). Or create your own
                  scripts and plugins using the Extension API.
                </p>
              </div>
              <div className="btn text-left p-[12px] bg-[#4F9CF9] rounded-[8px]  w-[150px] flex items-center justify-center">
                <a
                  href="#"
                  className="font-inter text-[14px] font-medium leading-[23px] tracking-[-0.02em] text-white"
                >
                  Let’s Go
                </a>
              </div>
            </div>
          </div>
        }
      />

      <YourWorkSection/>
      <OurSponsors/>
      <Footer/>
    </div>
  );
}

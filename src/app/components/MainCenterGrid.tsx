import React from "react";
import AnimatedPolygonLogo from "./Animated Logo";
import Image from "next/image";

function MainCenterGrid() {
  return (
    <div className="bg-[#0061fe] center-box relative ">
      <div className="absolute -top-[200vh] left-0 h-[400vh] w-[0.05px] bg-[#0061fe] transform scale-[0.5]  -z-10 line-1"></div>
      <div className="absolute -top-[200vh] right-0 h-[400vh] w-[.1px] bg-[#0061fe]  transform scale-[0.5] -z-10 line-1"></div>
      <div className="absolute top-0 left-[-200vw] h-[.1px] w-[400vw]  bg-[#0061fe]  transform scale-[0.5]  -z-10 line-2"></div>
      <div className="absolute bottom-0 right-[-200vw] h-[.1px] w-[400vw] bg-[#0061fe]  transform scale-[0.5] -z-10 line-2"></div>

      {/* lines */}

      {/* text */}
      <div
        className={`w-full h-full text-[6px] p-1  text-white leading-tight relative `}
      >
        <div className="w-full h-full absolute bottom-0 left-0 z-10 flex justify-center items-center logo-container">
          <AnimatedPolygonLogo />
        </div>
        <div className="w-[15%] h-[15%] absolute bottom-0 left-0 z-10 flex justify-center items-center white-logo opacity-0">
          <Image
            src="/logo.svg"
            alt="logo"
            width={150}
            height={150}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="absolute top-0 p-1 text-1 text-[#0061fe] text-[5px] w-2/3 ">
          {" "}
          At Dropbox, our Brand Guidelines help us infuse everything we make
          with identity.
        </h1>
        <h1 className="absolute top-0 p-1 text-2 ">
          {" "}
          From icons to illustration, logos to language, this collection is the
          foundation for how Dropbox looks, feels, and sounds like Dropbox.
        </h1>
      </div>
    </div>
  );
}

export default MainCenterGrid;

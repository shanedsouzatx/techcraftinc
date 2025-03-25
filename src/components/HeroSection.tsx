import React from "react";

const HeroSection = ({
  heading,
  subHeading,
  para,
  bgImgSrc,
  backDropShadow,
  textColor,
}: {
  heading: string;
  subHeading?: string;
  para: string;
  bgImgSrc: string;
  backDropShadow?: string;
  textColor?: string;
}) => {
  let _heading: any = [];
  if (heading.includes("<br/>")) {
    _heading = heading.split("<br/>");
  } else {
    _heading = null;
  }

  return (
    <div
      className="min-h-[400px] md:min-h-[550px] bg-no-repeat bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `${backDropShadow}, url(${bgImgSrc})`,
      }}
    >
      <div
        className="max-w-6xl flex-1 mx-auto px-4 py-10 mt-14 md:mt-11 md:px-6 lg:px-8 md:py-11 lg:py-16"
        data-aos="fade-right"
      >
        {subHeading && (
          <h5
            className={`text-xl md:text-5l lg:text-7xl ${
              textColor ? textColor : "!font-extrabold  bg-gradient-to-b from-black via-black to-black/70 text-transparent bg-clip-text"
            } font-semibold mb-4`}
          >
            {subHeading}
          </h5>
        )}
        <h2
          className={`text-3xl md:text-7xl ${
            textColor ?? textColor
          } !font-extrabold  bg-gradient-to-b from-white via-white to-white/70 text-transparent bg-clip-text ${subHeading ? "my-4" : "mb-4"}`}
        >
          {_heading ? (
            <>
              {_heading[0]}
              <br />
              {_heading[1]}
            </>
          ) : (
            heading
          )}
        </h2>
        <p
          className={`text-base text-[#000] max-w-3xl md:text-lg ${
            textColor ?? textColor
          }`}
        >
          {para}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;

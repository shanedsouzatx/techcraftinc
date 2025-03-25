'use client'
import React, { useState } from "react";
import { pricingTabs } from "@/constants/TabsArray";
import {
  allPricing,
  WebsiteDevelopment,
  BrandingAndGraphics,
  contentWriting,
  eCommercePricing,
  logoDesignPricing,
  videoAnimation,
  webAppSolution,
  SMM,
  Seo,
 } from "@/data/pricing";
import PricingCard from "../PricingCard";

const Pricing1 = () => {
  const [pricingActiveTab, setPricingActiveTab] = useState("All");

  return (
    <div className="bg-gradient-to-b from-[#48128A]  to-[#8B3791] -mx-20 py-16 ">
      <div className="max-w-7xl mx-auto">
        {/*Pricing Heading */}
        <div className="mb-6 text-center " data-aos="zoom-in">
          <h5 className="text-white text-2xl uppercase mb-3">
            We Cater to Almost
          </h5>
          <h2 className="bg-gradient-to-b from-white via-white to-[#BCBEC0]/70   text-transparent bg-clip-text text-4xl md:text-6xl font-bold uppercase mt-4 mb-5">
            All Industries
          </h2>
          <span className="text-white font-light text-lg md:text-2xl mb-3">
            At Tech Craft, we can customize our web development and digital
            marketing services to diverse industries including real estate,
            healthcare, automobile, e-commerce, DTC brands, franchises, food and
            beverages, and more. You can select the package that suits your
            business.
          </span>
        </div>
        {/* Pricing Tabs */}
        <div
          className="w-full text-center md:flex flex-wrap md:flex-nowrap items-center md:justify-between bg-gradient-to-b from-white via-white to-[#BCBEC0]/70  rounded-lg md:rounded-full mt-10 p-1 md:px-2 md:py-3 overflow-x-auto"
          data-aos="zoom-in"
        >
          {pricingTabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setPricingActiveTab(tab)}
              className={`text-sm w-[110%] whitespace-nowrap font-semibold rounded-full cursor-pointer px-3 py-2 transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#5114AE] hover:to-[#802FCE] hover:text-white ${
                pricingActiveTab === tab
                  ? "bg-gradient-to-b from-[#48128A] to-[#8B3791]  text-white   !rounded-full hover:!border-2 hover:!border-black hover:bg-none  hover:!text-black"
                  : "text-black bg-transparent hover:border-2 hover:border-black !rounded-full  hover:bg-none hover:!text-black "
              }`}
            >
              {tab}
            </div>
          ))}
        </div>

        {/*Pricing Cards  */}
        <div className="max-w-6xl mx-auto flex flex-wrap  my-8 md:my-16  justify-center md:justify-between">
          {pricingActiveTab === "All" &&
            allPricing.map((el, i) => (
              <PricingCard
                key={i}
                title={el.title}
                price={el.price}
                items={el.items}
                all={true}
              />
            ))}
             {pricingActiveTab === "Website Development" &&
            WebsiteDevelopment.map((el, i) => (
              <PricingCard
                key={i}
                title={el.title}
                price={el.price}
                items={el.items}
                all={true}
              />
            ))}
          {pricingActiveTab === "Logo Design" &&
            logoDesignPricing.map((el, i) => (
              <PricingCard
                key={i}
                title={el.title}
                price={el.price}
                items={el.items}
              />
            ))}
          {pricingActiveTab === "Web/App Solution" &&
            webAppSolution.map((el, i) => (
              <PricingCard
                key={i}
                title={el.title}
                price={el.price}
                items={el.items}
              />
            ))}
          {pricingActiveTab === "Branding and Graphics" &&
            BrandingAndGraphics.map((el, i) => (
              <PricingCard
                key={i}
                title={el.title}
                price={el.price}
                items={el.items}
              />
            ))}
          {pricingActiveTab === "E-commerce" &&
            eCommercePricing.map((el, i) => (
              <PricingCard
                key={i}
                title={el.title}
                price={el.price}
                items={el.items}
              />
            ))}
          {pricingActiveTab === "Video Animation" &&
            videoAnimation.map((el, i) => (
              <PricingCard
                key={i}
                title={el.title}
                price={el.price}
                items={el.items}
              />
            ))}
          {pricingActiveTab === "Content Writing" &&
            contentWriting.map((el, i) => (
              <PricingCard
                key={i}
                title={el.title}
                price={el.price}
                items={el.items}
              />
            ))}
          {pricingActiveTab === "SMM" &&
            SMM.map((el, i) => (
              <PricingCard
                key={i}
                title={el.title}
                price={el.price}
                items={el.items}
              />
            ))}
          {pricingActiveTab === "SEO" &&
            Seo.map((el, i) => (
              <PricingCard
                key={i}
                title={el.title}
                price={el.price}
                items={el.items}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing1;

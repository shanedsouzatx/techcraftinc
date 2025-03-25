import Image from "next/image";

const locations = [
  // {
  //   country: "INDIA",
  //   address: "B-25, Sector 58, Noida - 201301, Delhi - NCR, India",
  //   icon: "/Avatar/lo1.webp",
  // },
  {
    country: "USA",
    address: "30 N Gould St Ste R, Sheridan, WY 82801",
    icon: "/Avatar/loc1.svg",
  },
  {
    country: "Australia",
    address: "Appinventiv Australia, East Brisbane, QLD 4169, Australia",
    icon: "/Avatar/loc2.svg",
  },
  {
    country: "UK",
    address: "3rd Floor, 86-90 Paul Street EC2A 4NE, London, UK",
    icon: "/Avatar/loc3.svg",
  },
  {
    country: "UAE",
    address: "Tiger Al Yarmook Building, 13th floor B-block, Al Nahda St - Sharjah",
    icon: "/Avatar/loc4.svg",
  },
  {
    country: "CANADA",
    address: "Suite 3810, Bankers Hall West, 888 - 3rd Street SW, Calgary Alberta",
    icon: "/Avatar/loc5.svg",
  },
];

export default function Location() {
  return (
    <div className=" bg-gradient-to-b from-[#48128A]  to-[#8B3791]   text-white py-12 px-6">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
      {locations.map((loc, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center transition-all duration-300 hover:brightness-110 hover:scale-105"
        >
          <div className="h-24">
            <Image 
              src={loc.icon} 
              alt={loc.country} 
              width={50} 
              height={50} 
              className="h-full z-[999] w-auto object-cover transition-all duration-300 hover:brightness-150 hover:scale-110"
            />
          </div>
          <hr className="w-16 border-gray-500 my-4 transition-all duration-300 hover:border-white" />
          <h3 className="text-lg text-white font-semibold">{loc.country}</h3>
          <p className="text-gray-100 text-sm">{loc.address}</p>
        </div>
      ))}
    </div>
  </div>
  
  
  );
}

import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl  font-semibold  bg-gradient-to-t from-[#48128A] to-[#8B3791] text-transparent bg-clip-text uppercase bg-clip-text px-2 md:px-0">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Websites",
    count: 500,
  },
  {
    title: "Logos",
    count: 1000,
  },

  {
    title: "Mobile Apps",
    count: 110,
  },
  {
    title: "Ecommerce Websites",
    count: 600,
  },
];

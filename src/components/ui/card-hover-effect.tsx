import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    count: number;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 px-[55px] sm:px-0 md:grid-cols-2 lg:gap-9 lg:grid-cols-4 max-w-7xl mx-auto",
        className
      )}
    > 
      {items.map((item, idx) => (
        <Link
          href={""}
          key={idx}
          className="relative group block p-1 gap-4 h-[200px] w-[250px]"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card index={idx}>
            <CardDescription>{item.count + "+"}</CardDescription>
            <CardTitle className="text-2xl">{item.title}</CardTitle>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  index,
}: {
  className?: string;
  children: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "h-full w-full shadow-2xl p-4 overflow-hidden bg-white border border-transparent dark:border-white/[0.2] group-hover:border-[#48128A] relative z-20",
        className
      )}
      data-aos={`${index % 2 === 0 ? "flip-right" : "flip-left"}`}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h2
      className={cn(
        "font-semibold text-center text-slate-700 text-xl md:text-xl md:text-left",
        className
      )}
    >
      {children}
    </h2>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-[#5114AE] text-center font-bold text-5xl mb-3 md:text-left",
        className
      )}
    >
      {children}
    </p>
  );
};

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: " text-black text-base border-radius-50%  font-semibold  border-2 border-radius-50% rounded-full cursor-pointer py-3 w-full md:w-44 md:py-4 border-2 border-[#48128A] hover:border-none bg-transparent hover:bg-gradient-to-b from-[#48128A] to-[#8B3791]  hover:text-white transition-colors duration-300",
        destructive:
          "text-base font-semibold  border-2 p-1 border-radius-50% rounded-full  cursor-pointer py-3 w-full md:w-44 md:py-4 bg-gradient-to-b from-[#48128A] to-[#8B3791] text-white  relative overflow-visible hover:bg-transparent hover:bg-none hover:text-black hover:border-2 hover:border-[#48128A]",
        outline:
          "text-base font-semibold  border-2 p-1 border-radius-50% rounded-full  cursor-pointer py-3 w-full md:w-44 md:py-4 bg-gradient-to-b from-[#48128A] to-[#8B3791] text-white  relative overflow-visible hover:bg-transparent hover:bg-none hover:text-black hover:border-2 hover:border-[#48128A]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

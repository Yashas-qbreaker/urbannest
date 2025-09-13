import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-coral-gradient text-text-white shadow-medium hover:shadow-coral transform hover:scale-105 transition-all",
        destructive: "bg-error text-text-white hover:bg-error/90 shadow-medium",
        outline: "border border-input bg-background hover:bg-surface-hover hover:text-text-primary shadow-soft hover:shadow-medium transition-all",
        secondary: "bg-surface-soft text-text-primary hover:bg-surface-hover shadow-soft hover:shadow-medium transition-all",
        ghost: "hover:bg-surface-hover hover:text-text-primary transition-all",
        link: "text-coral underline-offset-4 hover:underline transition-all",
        premium: "bg-indigo-gradient text-text-white shadow-indigo hover:shadow-large transform hover:scale-105 transition-all",
        success: "bg-success text-text-white shadow-success hover:shadow-large transition-all",
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
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

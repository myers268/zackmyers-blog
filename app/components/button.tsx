import type { VariantProps } from "cva";
import { cva } from "cva";
import { forwardRef } from "react";
import { Button as AriaButton } from "react-aria-components";

const button = cva({
  base: "px-2xs rounded disabled:bg-disabled disabled:text-disabled-foreground disabled:cursor-not-allowed",
  variants: {
    intent: {
      primary:
        "bg-primary text-primary-foreground hover:bg-primary/85 active:bg-primary/70",
      secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/65 active:bg-secondary/30",
    },
    size: {
      md: "h-md",
    }
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
  },
});

export type ButtonProps = React.ComponentPropsWithoutRef<typeof AriaButton> &
  VariantProps<typeof button>;

export const Button = forwardRef<React.ComponentRef<typeof AriaButton>, ButtonProps>(
  ({ className, intent, size, ...props }, ref) => (
    <AriaButton ref={ref} className={button({ className, intent, size })} {...props} />
  ),
);
Button.displayName = "Button";

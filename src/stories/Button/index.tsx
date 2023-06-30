import React from "react";
import { cva } from "class-variance-authority";
import { ButtonProps } from "./type";

const button = cva("button", {
  variants: {
    type: {
      primary: [
        "bg-blue-500",
        "text-white",
        "border-transparent",
        "hover:bg-blue-600",
      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
      large: ["text-lg", "py-2", "px-6"]
    },
  },
  compoundVariants: [{ type: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    type: "primary",
    size: "medium",
  },
});

export const Button = ({
  className,
  type,
  size,
  label,
  ...props
}: ButtonProps) => <button className={button({ type, size, className })} {...props} > {label} </button>;
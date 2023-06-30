import React from "react";
import { cva } from "class-variance-authority";
import { CheckboxProps } from "./type";

const checkbox = cva("button", {
  variants: {
    checkedStatus: {
        checked: {},
        unchecked: {},
        disabled: {},
        neutral: {}
    }
  },
  compoundVariants: [],
  defaultVariants: {
  },
});

export const Checkbox = ({
  className,
  checkedStatus,
  label
} : CheckboxProps) =>  (<div>
    <input className={checkbox({ checkedStatus, className })} type="checkbox" id={label} name={label} {...(checkedStatus === "checked" ? {checked : true} : {})}/>
    <label htmlFor={label}>{label}</label>
</div>);

// export default Checkbox;
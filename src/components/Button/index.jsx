import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none" };
const variants = {
  fill: {
    red_400: "bg-red-400 text-white-A700",
    gray_200: "bg-gray-200 text-black-900",
  },
  outline: {
    white_A700: "outline outline-[1px] outline-white-A700 text-white-A700",
    black_900: "outline outline-[1px] outline-black-900 text-black-900",
  },
};
const sizes = { xs: "p-1.5", sm: "p-3.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "square",
  size = "xs",
  variant = "fill",
  color = "gray_200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["red_400", "gray_200", "white_A700", "black_900"]),
};

export { Button };

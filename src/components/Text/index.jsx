import React from "react";

const sizeClasses = {
  txtRobotoBold40: "font-bold font-roboto",
  txtRobotoRegular18Black900: "font-normal font-roboto",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoRegular18: "font-normal font-roboto",
  txtRobotoBold48: "font-bold font-roboto",
  txtRobotoBold24: "font-bold font-roboto",
  txtRobotoSemiBold16: "font-roboto font-semibold",
  txtRobotoBold56: "font-bold font-roboto",
  txtRobotoBold20: "font-bold font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

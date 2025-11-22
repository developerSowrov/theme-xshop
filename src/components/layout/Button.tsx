"use client";

import { FC, memo, JSX } from "react";
import cn from "@/utils/cn";

type TProps = {
   children: React.ReactNode;
   className?: string;
   borderColor?: "border-grey-50" | "border-gray-100" | "border-gray-200";
   bgColor?: "black" | "white" | "gray";
   type?: "button" | "submit" | "reset";
   py?: "py-4" | "py-3" | "py-2";
   disable?: boolean;
   onClick?: (ev: React.MouseEvent<HTMLElement>) => void;
};

const Button: FC<TProps> = ({
   children,
   className,
   borderColor,
   disable = false,
   onClick,
   type = "button",
   bgColor = "gray",
   py = "py-4",
}): JSX.Element => {
   return (
      <button
         onClick={onClick}
         type={type}
         className={` 
            ${bgColor === "black" && "bg-black text-white hover:bg-gray-900"} 
            ${bgColor === "white" && "bg-white text-black hover:bg-gray-100"} 
            ${bgColor === "gray" && "bg-grey-50 text-black hover:bg-gray-100"} 
            ${borderColor && `border ${borderColor}`} 
            ${py && py} 
            ${disable ? "cursor-not-allowed opacity-80" : ""}
            ${cn("rounded-full px-16 text-lg font-medium transition-all", className)}`}
      >
         {children}
      </button>
   );
};

export default memo(Button);

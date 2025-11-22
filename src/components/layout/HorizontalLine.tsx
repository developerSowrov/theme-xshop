import cn from "@/utils/cn";
import { FC, JSX } from "react";

type TProps = {
   className?: string;
};

const HorizontalLine: FC<TProps> = ({ className }): JSX.Element => {
   return <hr className={cn("mb-6 mt-16 border-gray-200", className)} />;
};

export default HorizontalLine;

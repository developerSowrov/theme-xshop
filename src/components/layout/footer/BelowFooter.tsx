import { FC, JSX } from "react";
import Link from "next/link";

const BelowFooter: FC = (): JSX.Element => {
   return (
      <section className="flex items-center justify-between pb-6 max-xl:flex-col">
         <div>
            <p className="cursor-default text-base text-black/60 transition-[color] hover:text-black">
               © 2025 XShop, All Rights Reserved
            </p>
         </div>

         <div className="cursor-default text-base text-black/60 transition-[color] hover:text-black max-xl:hidden">
            <p>
               Powered by
               <Link
                  href="https://apidoxy.com/"
                  target="_blank"
                  title="Go To Developer Github Page"
                  className="ml-1 font-medium underline"
               >
                  Apidoxy
               </Link>
            </p>
         </div>
      </section>
   );
};

export default BelowFooter;

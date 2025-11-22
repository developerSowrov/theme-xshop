import { FC, memo, JSX } from "react";
import PulseLoader from "react-spinners/PulseLoader";

const PageLoaderWhiteScreen: FC = (): JSX.Element => {
   return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-100">
         <PulseLoader size={12} margin={2} color="#656565" />
      </div>
   );
};

export default memo(PageLoaderWhiteScreen);

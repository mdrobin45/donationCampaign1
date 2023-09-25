import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import Header from "../components/Header/Header";
import HeroSection from "../components/Home/HeroSection/HeroSection";

const HomeTemplate = () => {
   const { pathname } = useLocation();
   const [isLoading, setIsLoading] = useState(true);

   // set loading timer
   setTimeout(() => {
      setIsLoading(false);
   }, 1500);

   return (
      <>
         {isLoading ? (
            <div className=" h-screen flex items-center justify-center">
               <SyncLoader color="#FF444A" />
            </div>
         ) : (
            <div>
               {pathname === "/" ? <HeroSection /> : <Header />}

               <div className="px-16">
                  <Outlet />
               </div>
            </div>
         )}
      </>
   );
};

export default HomeTemplate;

import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import Header from "../components/Header/Header";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import { SearchText } from "../myContext/SearchText";
import { FetchData } from "../myContext/fetchData";

const HomeTemplate = () => {
   const { pathname } = useLocation();
   const [isLoading, setIsLoading] = useState(true);
   const [fetchData, setFetchData] = useState([]);

   // set loading timer
   setTimeout(() => {
      setIsLoading(false);
   }, 1000);

   // Fetch campaigns
   useEffect(() => {
      fetch("https://mdrobin45.github.io/api/donations.json")
         .then((res) => res.json())
         .then((data) => setFetchData(data));
   }, []);

   const [searchText, setSearchText] = useState("");

   // handle search button click
   const searchBtn = (string) => {
      setSearchText(string);
   };
   return (
      <>
         <FetchData.Provider value={fetchData}>
            <SearchText.Provider value={{ searchBtn, searchText }}>
               {isLoading ? (
                  <div className=" h-screen flex items-center justify-center">
                     <SyncLoader color="#FF444A" />
                  </div>
               ) : (
                  <div>
                     {pathname === "/" ? <HeroSection /> : <Header />}

                     <div className="px-4 md:px-7 lg:px-16">
                        <Outlet />
                     </div>
                  </div>
               )}
            </SearchText.Provider>
         </FetchData.Provider>
      </>
   );
};

export default HomeTemplate;

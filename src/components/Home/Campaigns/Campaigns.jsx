import { useContext, useEffect, useState } from "react";
import { SearchText } from "../../../myContext/SearchText";
import { FetchData } from "../../../myContext/fetchData";
import CampaignCard from "./CampaignCard";

const Campaigns = () => {
   const fetchedCampaigns = useContext(FetchData);
   const { searchText } = useContext(SearchText);
   const [isSearched, setIsSearched] = useState(false);
   const [isSearchFound, setIsSearchFound] = useState(true);

   // Filter data by user searching
   const filteredData = fetchedCampaigns.filter(
      (campaign) => campaign.category.toLowerCase() === searchText.toLowerCase()
   );

   useEffect(() => {
      if (filteredData.length) {
         setIsSearched(true);
      } else {
         setIsSearched(false);
      }

      // Handle error search
      if (!filteredData.length && searchText.length) {
         setIsSearchFound(false);
      } else {
         setIsSearchFound(true);
      }
   }, [filteredData, searchText]);

   return (
      <>
         {isSearchFound ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
               {isSearched
                  ? filteredData.map((campaign) => (
                       <CampaignCard key={campaign.id} campaign={campaign} />
                    ))
                  : fetchedCampaigns.map((campaign) => (
                       <CampaignCard key={campaign.id} campaign={campaign} />
                    ))}
            </div>
         ) : (
            <div>
               <h2 className="text-4xl font-bold text-center mt-20">
                  No data found
               </h2>
            </div>
         )}
      </>
   );
};

export default Campaigns;

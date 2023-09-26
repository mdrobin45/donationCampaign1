import { useContext, useEffect, useState } from "react";
import { SearchText } from "../../../myContext/SearchText";
import { FetchData } from "../../../myContext/fetchData";
import CausesCard from "./CausesCard";

const DonationCauses = () => {
   const fetchedDonationData = useContext(FetchData);
   const { searchText } = useContext(SearchText);
   const [isSearched, setIsSearched] = useState(false);

   // Filter data by user searching
   const filteredData = fetchedDonationData.filter(
      (data) => data.category.toLowerCase() === searchText.toLowerCase()
   );

   useEffect(() => {
      if (filteredData.length) {
         setIsSearched(true);
      } else {
         setIsSearched(false);
      }
   }, [filteredData]);

   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
         {isSearched
            ? filteredData.map((cause) => (
                 <CausesCard key={cause.id} cause={cause} />
              ))
            : fetchedDonationData.map((cause) => (
                 <CausesCard key={cause.id} cause={cause} />
              ))}
      </div>
   );
};

export default DonationCauses;

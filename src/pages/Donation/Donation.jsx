import { useContext, useEffect, useState } from "react";
import AllDonation from "../../components/Donation/AllDonation/AllDonation";
import SeeAllButton from "../../components/Donation/SeeAllButton/SeeAllButton";
import EmptyPage from "../../components/EmptyPage/EmptyPage";
import useTitle from "../../hooks/useTitle";
import { getSavedDonation } from "../../localStorage/localStorage";
import { FetchData } from "../../myContext/fetchData";

const Donation = () => {
   useTitle("Donations");
   const [index, setIndex] = useState(4);
   const [isBtnShow, setIsBtnShow] = useState(true);
   const savedDonationIds = getSavedDonation();
   const fetchedDonationData = useContext(FetchData);

   const matchedDonations = fetchedDonationData.filter((cause) => {
      return savedDonationIds.some((id) => {
         return cause.id === parseFloat(id);
      });
   });
   const initialDonations = matchedDonations.slice(0, index);

   // see more handler
   const seeMoreHandler = () => {
      if (index <= matchedDonations.length) {
         setIndex((prevValue) => prevValue + 4);
      }
   };

   useEffect(() => {
      if (index >= matchedDonations.length) {
         setIsBtnShow(false);
      }
   }, [index, matchedDonations]);
   return (
      <>
         {initialDonations.length ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-20">
               <AllDonation initialDonations={initialDonations} />
            </div>
         ) : (
            <EmptyPage />
         )}

         {isBtnShow ? <SeeAllButton seeMoreHandler={seeMoreHandler} /> : ""}
      </>
   );
};

export default Donation;

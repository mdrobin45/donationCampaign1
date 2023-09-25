import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllDonation from "../../components/Donation/AllDonation/AllDonation";
import SeeAllButton from "../../components/Donation/SeeAllButton/SeeAllButton";
import useTitle from "../../hooks/useTitle";
import { getSavedDonation } from "../../localStorage/localStorage";

const Donation = () => {
   useTitle("Donations");
   const [index, setIndex] = useState(4);
   const [isBtnShow, setIsBtnShow] = useState(true);
   const savedDonationIds = getSavedDonation();
   const allCauses = useLoaderData();

   const matchedDonations = allCauses.filter((cause) => {
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
         <div className="grid grid-cols-2 gap-6 my-20">
            <AllDonation initialDonations={initialDonations} />
         </div>
         {isBtnShow ? <SeeAllButton seeMoreHandler={seeMoreHandler} /> : ""}
      </>
   );
};

export default Donation;

import { useLoaderData } from "react-router-dom";
import { getSavedDonation } from "../../../localStorage/localStorage";
import DonationCard from "./DonationCard";

const AllDonation = () => {
   const savedDonationIds = getSavedDonation();
   const allCauses = useLoaderData();

   const matchedDonations = allCauses.filter((cause) => {
      return savedDonationIds.some((id) => {
         return cause.id === parseFloat(id);
      });
   });
   return (
      <>
         {matchedDonations.map((donation) => (
            <DonationCard donation={donation} key={donation.id} />
         ))}
      </>
   );
};

export default AllDonation;

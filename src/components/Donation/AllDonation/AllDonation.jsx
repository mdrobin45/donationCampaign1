import DonationCard from "./DonationCard";

const AllDonation = ({ initialDonations }) => {
   return (
      <>
         {initialDonations.map((donation) => (
            <DonationCard donation={donation} key={donation.id} />
         ))}
      </>
   );
};

export default AllDonation;

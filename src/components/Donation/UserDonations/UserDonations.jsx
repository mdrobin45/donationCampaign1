import DonationCard from "./DonationCard";

const UserDonations = ({ initialDonations }) => {
   return (
      <>
         {initialDonations.map((donation) => (
            <DonationCard donation={donation} key={donation.id} />
         ))}
      </>
   );
};

export default UserDonations;

import AllDonation from "../../components/Donation/AllDonation/AllDonation";
import useTitle from "../../hooks/useTitle";

const Donation = () => {
   useTitle("Donations");
   return (
      <div className="grid grid-cols-2 gap-6 my-20">
         <AllDonation />
      </div>
   );
};

export default Donation;

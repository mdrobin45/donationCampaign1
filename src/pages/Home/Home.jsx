import DonationCauses from "../../components/Home/DonationCauses/DonationCauses";
import useTitle from "../../hooks/useTitle";

const Home = () => {
   useTitle("Home");
   return (
      <div>
         <DonationCauses />
      </div>
   );
};

export default Home;

import Campaigns from "../../components/Home/Campaigns/Campaigns";
import useTitle from "../../hooks/useTitle";

const Home = () => {
   useTitle("Home");
   return (
      <div>
         <Campaigns />
      </div>
   );
};

export default Home;

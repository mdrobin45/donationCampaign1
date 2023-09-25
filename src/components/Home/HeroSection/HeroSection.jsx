import "../../../index.css";
import Header from "../../Header/Header";
import Banner from "./Banner/Banner";

import "./style.css";

const HeroSection = () => {
   return (
      <>
         <section className="heroSection">
            <Header />
            <Banner />
         </section>
      </>
   );
};

export default HeroSection;

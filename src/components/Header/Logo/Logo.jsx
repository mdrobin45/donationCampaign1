import { Link } from "react-router-dom";
import logo from "../../../../public/images/logo.png";

const Logo = () => {
   return (
      <Link to="/" className="flex items-center">
         <img src={logo} className=" h-14 mr-3" alt="Logo" />
      </Link>
   );
};

export default Logo;

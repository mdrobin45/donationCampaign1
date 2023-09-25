import { Link } from "react-router-dom";

const Logo = () => {
   return (
      <Link to="/" className="flex items-center">
         <img src="/public/logo.png" className=" h-14 mr-3" alt="Logo" />
      </Link>
   );
};

export default Logo;

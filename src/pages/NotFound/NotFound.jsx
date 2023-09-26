import { Link } from "react-router-dom";
import notFoundImage from "../../../public/images/page-not-found.svg";
import useTitle from "../../hooks/useTitle";

const NotFound = () => {
   useTitle("404 - Page not found!");
   return (
      <div className="flex items-center justify-center flex-col">
         <img className=" w-4/5" src={notFoundImage} />
         <Link className="text-blue-600" to="/">
            Back to home
         </Link>
      </div>
   );
};

export default NotFound;

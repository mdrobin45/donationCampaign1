import { Link } from "react-router-dom";
import notFoundImage from "../../../public/images/page-not-found.svg";
import useTitle from "../../hooks/useTitle";

const NotFound = () => {
   useTitle("404 - Page not found!");
   return (
      <div className="flex h-[80vh] items-center justify-center flex-col">
         <img className=" w-2/4" src={notFoundImage} />
         <p className="text-gray-800 mb-4 text-lg">Oops!.. Page not found</p>
         <Link className="text-white py-4 px-6 rounded-md bg-orange-600" to="/">
            Back to home
         </Link>
      </div>
   );
};

export default NotFound;

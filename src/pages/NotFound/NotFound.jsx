import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const NotFound = () => {
   useTitle("404 - Page not found!");
   return (
      <div className="flex items-center justify-center flex-col">
         <img className=" w-4/5" src="/public/page-not-found.svg" />
         <Link to="/">Back to home</Link>
      </div>
   );
};

export default NotFound;

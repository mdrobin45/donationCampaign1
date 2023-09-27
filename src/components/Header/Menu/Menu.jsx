import { NavLink } from "react-router-dom";
import "./style.css";

const Menu = ({ isExpand }) => {
   return (
      <div
         className={`${
            isExpand
               ? "w-full bg-white md:block md:w-auto"
               : "hidden w-full md:block md:w-auto"
         }`}
         id="navbar-default">
         <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
               <NavLink
                  to="/"
                  className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0"
                  aria-current="page">
                  Home
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/donation"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0">
                  Donation
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="statistics"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0">
                  Statistics
               </NavLink>
            </li>
         </ul>
      </div>
   );
};

export default Menu;

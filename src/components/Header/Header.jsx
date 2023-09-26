import { useState } from "react";
import Hamburger from "./Hamburger/Hamburger";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

const Header = () => {
   const [isExpand, setIsExpand] = useState(false);
   const showMobileMenu = () => {
      setIsExpand(!isExpand);
   };
   return (
      <nav className="lg:px-16 bg-transparent border-gray-200 dark:bg-gray-900">
         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Logo />
            <Hamburger handleHamburger={showMobileMenu} />
            <Menu isExpand={isExpand} />
         </div>
      </nav>
   );
};

export default Header;

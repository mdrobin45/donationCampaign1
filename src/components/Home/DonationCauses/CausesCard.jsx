import { Link } from "react-router-dom";

const CausesCard = ({ cause }) => {
   const { id, image, title, category, category_bg, card_bg, text_color } =
      cause;
   return (
      <>
         <Link to={`/${id}`}>
            <div
               style={{ backgroundColor: card_bg }}
               className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
               <img className="rounded-t-lg" src={image} alt={title} />
               <div className="px-5 pt-2">
                  <span
                     style={{ color: text_color, backgroundColor: category_bg }}
                     className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300`}>
                     {category}
                  </span>
               </div>
               <div className="px-5 pt-1">
                  <h5
                     style={{ color: text_color }}
                     className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                     {title}
                  </h5>
               </div>
            </div>
         </Link>
      </>
   );
};

export default CausesCard;

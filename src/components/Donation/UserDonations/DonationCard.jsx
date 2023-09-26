import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
   const {
      id,
      image,
      title,
      price,
      category,
      category_bg,
      card_bg,
      text_color,
   } = donation;
   return (
      <div
         style={{ backgroundColor: card_bg }}
         className="border rounded-xl items-center justify-betweem shadow-sm sm:flex dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
         <div className="flex-shrink-0 relative w-full lg:w-1/2 rounded-t-xl overflow-hidden pt-[40%] sm:rounded-l-xl sm:max-w-[15rem] md:rounded-tr-none md:max-w-xs">
            <img
               className="w-full h-full absolute top-0 left-0 object-cover"
               src={image}
               alt={title}
            />
         </div>
         <div className="flex flex-wrap pb-4 md:pb-0">
            <div className="p-4 justify-center flex-col h-full sm:p-7">
               <span
                  style={{ color: text_color, backgroundColor: category_bg }}
                  className="text-xs inline-block font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  {category}
               </span>
               <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {title}
               </h3>
               <p
                  style={{ color: text_color }}
                  className="mt-1 mb-7 dark:text-gray-400">
                  ${price}
               </p>
               <Link
                  to={`/campaign/${id}`}
                  style={{ backgroundColor: text_color }}
                  className="py-4 rounded-md px-6 inline text-white">
                  View Details
               </Link>
            </div>
         </div>
      </div>
   );
};

export default DonationCard;

import { Link } from "react-router-dom";

const CampaignCard = ({ campaign }) => {
   const { id, image, title, category, category_bg, card_bg, text_color } =
      campaign;
   return (
      <>
         <Link to={`/campaign/${id}`}>
            <div
               style={{ backgroundColor: card_bg }}
               className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
               <img className="rounded-t-lg w-full" src={image} alt={title} />
               <div className="px-5 pt-2">
                  <span
                     style={{ color: text_color, backgroundColor: category_bg }}
                     className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded`}>
                     {category}
                  </span>
               </div>
               <div className="px-5 pt-1">
                  <h5
                     style={{ color: text_color }}
                     className="mb-2 text-md font-bold tracking-tight text-gray-900">
                     {title}
                  </h5>
               </div>
            </div>
         </Link>
      </>
   );
};

export default CampaignCard;

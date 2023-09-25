import { useLoaderData, useParams } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import { saveDonationInStorage } from "../../../localStorage/localStorage";

const SingleDonation = () => {
   const { id } = useParams();
   const allCauses = useLoaderData();
   const findSelectedCause = allCauses.find(
      (cause) => cause.id === parseFloat(id)
   );
   const { image, title, description, text_color, price } = findSelectedCause;
   useTitle(title);
   return (
      <div className=" w-4/5 mx-auto my-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <div className="relative">
            <img className="rounded-t-lg" src={image} alt={title} />
            <div
               style={{ backgroundColor: "rgba(11, 11, 11, 0.50)" }}
               className=" absolute bottom-0 w-full py-4 px-5">
               <button
                  onClick={() => {
                     saveDonationInStorage(id);
                  }}
                  style={{ backgroundColor: text_color }}
                  className="py-3 px-4 text-white rounded-md">
                  Donate ${price}
               </button>
            </div>
         </div>

         <div className="p-5">
            <h5 className="mb-2 capitalize text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               {title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {description}
            </p>
         </div>
      </div>
   );
};

export default SingleDonation;

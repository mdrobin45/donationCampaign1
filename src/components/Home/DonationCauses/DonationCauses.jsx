import { useLoaderData } from "react-router-dom";
import CausesCard from "./CausesCard";

const DonationCauses = () => {
   const allCauses = useLoaderData();
   return (
      <div className="grid grid-cols-4 gap-6 my-10">
         {allCauses.map((cause) => (
            <CausesCard key={cause.id} cause={cause} />
         ))}
      </div>
   );
};

export default DonationCauses;

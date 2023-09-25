import { useParams } from "react-router-dom";

const SingleDonation = () => {
   const { id } = useParams();

   console.log(id);
   return (
      <div>
         <h1>Single Donation page</h1>
      </div>
   );
};

export default SingleDonation;

import { useContext } from "react";
import Chart from "react-google-charts";
import useTitle from "../../hooks/useTitle";
import { getSavedDonation } from "../../localStorage/localStorage";
import { FetchData } from "../../myContext/fetchData";

const Statistics = () => {
   useTitle("Statistics");
   // Get necessary chart data
   const fetchedDonationData = useContext(FetchData);
   const savedDonation = getSavedDonation();

   const numberOfTotalDonation = fetchedDonationData.length;
   const numberOfUserDonation = savedDonation.length;

   // Set chart Data
   const data = [
      ["Donation", "Donation Statistics"],
      ["Total Donation", numberOfTotalDonation - numberOfUserDonation],
      ["Your Donation", numberOfUserDonation],
   ];

   // chart options
   const options = {
      legend: { position: "bottom" },
      is3D: true,
      colors: ["#FF444A", "#00C49F"],
   };

   return (
      <div className="flex justify-center items-center">
         <Chart
            chartType="PieChart"
            data={data}
            width={"100%"}
            height={"500px"}
            options={options}
         />
      </div>
   );
};

export default Statistics;

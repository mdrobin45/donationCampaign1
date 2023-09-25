import { createBrowserRouter } from "react-router-dom";
import SingleDonation from "../components/Donation/SingleDonation/SingleDonation";
import Donation from "../pages/Donation/Donation";
import Home from "../pages/Home/Home";
import Statistics from "../pages/Statistics/Statistics";
import HomeTemplate from "../template/HomeTemplate";
const router = createBrowserRouter([
   {
      path: "/",
      element: <HomeTemplate />,
      children: [
         {
            path: "/",
            element: <Home />,
            loader: () =>
               fetch("https://mdrobin45.github.io/api/donations.json"),
         },
         {
            path: "/donation",
            element: <Donation />,
            loader: () =>
               fetch("https://mdrobin45.github.io/api/donations.json"),
         },
         {
            path: "/statistics",
            element: <Statistics />,
         },
         {
            path: "/:id",
            element: <SingleDonation />,
            loader: () =>
               fetch("https://mdrobin45.github.io/api/donations.json"),
         },
      ],
   },
]);

export default router;

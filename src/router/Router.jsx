import { createBrowserRouter } from "react-router-dom";
import SingleDonation from "../components/Donation/SingleDonation/SingleDonation";
import Donation from "../pages/Donation/Donation";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Statistics from "../pages/Statistics/Statistics";
import HomeTemplate from "../template/HomeTemplate";
const router = createBrowserRouter([
   {
      path: "/",
      element: <HomeTemplate />,
      errorElement: <NotFound />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/donation",
            element: <Donation />,
         },
         {
            path: "/statistics",
            element: <Statistics />,
         },
         {
            path: "/:id",
            element: <SingleDonation />,
         },
      ],
   },
]);

export default router;

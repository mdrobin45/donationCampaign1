import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/Mainlayout";
import Donations from "../pages/Donations/Donations";
import Home from "../pages/Home/Home";
import Statistics from "../pages/Statistics/Statistics";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/donations",
            element: <Donations />,
         },
         {
            path: "/statistics",
            element: <Statistics />,
         },
      ],
   },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
// import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      // { path: "", element: <HomePage /> },
    ],
  },
  { path: "games/:slug", element: <GameDetailPage /> },
]);

export default router;

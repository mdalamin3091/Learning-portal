import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CoursePlayer from "../pages/CoursePlayer";
import Leaderboard from "../pages/Leaderboard";
import Quiz from "../pages/Quiz";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/coursePlayer",
        element: <CoursePlayer />,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
    ],
  },
]);

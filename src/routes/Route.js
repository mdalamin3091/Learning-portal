import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/shared/Login";
import Register from "../pages/student//Register";
import CoursePlayer from "../pages/student/CoursePlayer";
import Leaderboard from "../pages/student/Leaderboard";
import Quiz from "../pages/student/Quiz";
import Layout from "../layout/Layout";
import DashboardVideos from "../pages/admin/videos/DashboardVideos";
import Dashboard from "../pages/admin/Dashboard";
import DashboardAssignments from "../pages/admin/assignments/DashboardAssignments";
import DashboardQuizes from "../pages/admin/quiz/DashboardQuizes";
import AssignmentMark from "../pages/admin/AssignmentMark";
import AddVideo from "../pages/admin/videos/AddVideo";
import AddAssignment from "../pages/admin/assignments/AddAssignment";
import AddQuiz from "../pages/admin/quiz/AddQuiz";

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
        path: "/coursePlayer/quiz/:id",
        element: <Quiz />,
      },
      
      // all admin routes
      {
        path: "/admin",
        element: <Dashboard />
      },
      {
        path: "/admin/videos",
        element: <DashboardVideos />
      },
      {
        path: "/admin/assignments",
        element: <DashboardAssignments />
      },
      {
        path: "/admin/quiz",
        element: <DashboardQuizes />,
      },
      {
        path: "/admin/assignmentMark",
        element: <AssignmentMark />,
      },
      {
        path: "/admin/videos/addVideo",
        element: <AddVideo />,
      },
      {
        path: "/admin/assignment/addAssignment",
        element: <AddAssignment />,
      },
      {
        path: "/admin/quiz/addQuiz",
        element: <AddQuiz />,
      },
    ],
  },
]);

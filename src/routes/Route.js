import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/shared/Login";
import Register from "../pages/student//Register";
import CoursePlayer from "../pages/student/CoursePlayer";
import Leaderboard from "../pages/student/Leaderboard";
import Quiz from "../pages/student/Quiz";
import Layout from "../layout/Layout";
import DashboardVideos from "../pages/admin/videos/DashboardVideos";
import Dashboard from "../pages/admin/Dashboard";
import DashboardQuizes from "../pages/admin/quiz/DashboardQuizes";
import AssignmentMark from "../pages/admin/AssignmentMark";
import AddVideo from "../pages/admin/videos/AddVideo";
import AddAssignment from "../pages/admin/assignments/AddAssignment";
import AddQuiz from "../pages/admin/quiz/AddQuiz";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import StudentRoute from "./StudentRoute";
import AdminLogin from "../pages/admin/AdminLogin";
import ErrorPage from "../pages/ErrorPage";
import DashboardAssignmentsList from "../pages/admin/assignments/DashboardAssignmentsList";
import EditVideo from "../pages/admin/videos/EditVideo";
import EditAssignment from "../pages/admin/assignments/EditAssignment";
import EditQuiz from "../pages/admin/quiz/EditQuiz";
import CourseLayout from "../layout/CourseLayout";
import VideoPlayer from "../components/VideoPlayer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },

  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
  {
    path: "/admin/login",
    element: (
      <PublicRoute>
        <AdminLogin />
      </PublicRoute>
    ),
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/coursePlayer",
        element: (
          <PrivateRoute>
            {" "}
            <StudentRoute>
              <CourseLayout />{" "}
            </StudentRoute>{" "}
          </PrivateRoute>
        ),
        children:[
          {
            path:"/coursePlayer", 
            element:<VideoPlayer/>
          },
          {
            path:"/coursePlayer/videos/:id", 
            element:<VideoPlayer/>
          }
        ]
      },
      {
        path: "/videos/:id",
        element: (
          <PrivateRoute>
            {" "}
            <StudentRoute>
              <CoursePlayer />{" "}
            </StudentRoute>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/leaderboard",
        element: (
          <PrivateRoute>
            {" "}
            <StudentRoute>
              {" "}
              <Leaderboard />{" "}
            </StudentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/coursePlayer/videos/quiz/:id",
        element: (
          <PrivateRoute>
            <StudentRoute>
              <Quiz />
            </StudentRoute>
          </PrivateRoute>
        ),
      },


      // all admin routes
      {
        path: "/admin",
        element: (
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/videos",
        element: (
          <AdminRoute>
            <DashboardVideos />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/videos/editVideo/:id",
        element: (
          <AdminRoute>
            <EditVideo />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/assignments",
        element: (
          <AdminRoute>
            <DashboardAssignmentsList />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/assignments/editAssignment/:id",
        element: (
          <AdminRoute>
            <EditAssignment />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/quiz",
        element: (
          <AdminRoute>
            <DashboardQuizes />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/quiz/editQuiz/:id",
        element: (
          <AdminRoute>
            <EditQuiz />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/assignmentMark",
        element: (
          <AdminRoute>
            <AssignmentMark />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/videos/addVideo",
        element: (
          <AdminRoute>
            <AddVideo />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/assignment/addAssignment",
        element: (
          <AdminRoute>
            <AddAssignment />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/quiz/addQuiz",
        element: (
          <AdminRoute>
            <AddQuiz />
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />
  },
]);

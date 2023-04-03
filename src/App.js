import React from "react";
import Layout from "./layout/Layout";
import Login from "./pages/shared/Login";
import Register from "./pages/student/Register";
import { useAuthCheck } from "./hooks/useAuthCheck";
import { router } from "./routes/Route";
import { RouterProvider } from "react-router-dom";

function App() {
  const authChecked = useAuthCheck();
  return (
    <>
      {authChecked ? (
        <RouterProvider router={router}>
          <Login />
          <Register />
          <Layout />
        </RouterProvider>
      ) : (
        <div className="text-blue-500">authentication checking....</div>
      )}
    </>
  );
}

export default App;

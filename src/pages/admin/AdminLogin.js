import React, { useEffect, useState } from "react";
import logo from "../../assets/image/learningportal.svg"
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../features/auth/authApi";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { loggedInUser } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";

const AdminLogin = () => {
  const [loginData, setLoginData] = useState({
    password: "",
    email: "",
  })

  const [login, { data: loggedInData, isLoading, isError, isSuccess }] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // update login state data by this change function
  const handleChange = (value, field) => {
    setLoginData((prevData) => ({ ...prevData, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginData);
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(loggedInUser(loggedInData));
      setLoginData({
        password: "",
        email: "",
      });
      navigate("/admin")
    };
  }, [loggedInData, isSuccess])


  return (
    <section className="py-6 bg-primary h-screen grid place-items-center">
      <div className="mx-auto max-w-md px-5 lg:px-0">
        <div>
          <img className="h-12 mx-auto" src={logo} />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
            Sign in to Admin Account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                value={loginData.email}
                autoComplete="email"
                onChange={(e) => handleChange(e.target.value, "email")}
                required
                className="login-input rounded-t-md"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={loginData.password}
                onChange={(e) => handleChange(e.target.value, "password")}
                required
                className="login-input rounded-b-md"
                placeholder="Password"
              />
            </div>
          </div>

         
        
          <div className="flex items-center justify-end">
            <div className="text-sm">
              <Link
                to={"/"}
                className="font-medium text-violet-600 hover:text-violet-500"
              >
               Sign in as a Student
              </Link>
            </div>
          </div>

          <div>
            <button
              disabled={isLoading}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
            >
              {isLoading ? <Loader /> : "Sign in"}
            </button>
          </div>
          {isError && <Error message={"something error occured"} />}
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;

import React, { useEffect, useState } from "react";
import logo from "../../assets/image/learningportal.svg";
import TextInput from "../../components/shared/TextInput";
import { useRegisterMutation } from "../../features/auth/authApi";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registeredUser } from "../../features/auth/authSlice";
const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [register, { data: registeredData, isLoading, isError, isSuccess }] = useRegisterMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (value, field) => {
    setRegisterData((prevState) => ({ ...prevState, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      return alert("password does not match");
    } else {
      register({
        name: registerData.name,
        email: registerData.email,
        password: registerData.password,
        role: "student",
      });
    }
  }

  // update authslice on redux store 

  useEffect(() => {
    if (isSuccess) {
    dispatch(registeredUser(registeredData))
    navigate("/coursePlayer")
    }
  }, [isSuccess, registeredData])


  return (
    <section className="py-6 bg-primary h-screen grid place-items-center">
      <div className="mx-auto max-w-md px-5 lg:px-0">
        <div>
          <img className="h-12 mx-auto" src={logo} />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
            Create Your New Account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <TextInput
              value={registerData.name}
              onChange={(e) => handleChange(e.target.value, "name")}
              id="name"
              name="name"
              type="name"
              autoComplete="name"
              required
              className="login-input rounded-t-md"
              placeholder="Student Name"
            />
            <div>
              <TextInput
                value={registerData.email}
                onChange={(e) => handleChange(e.target.value, "email")}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="login-input"
                placeholder="Email address"
              />
            </div>
            <div>
              <TextInput
                value={registerData.password}
                onChange={(e) => handleChange(e.target.value, "password")}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="login-input"
                placeholder="Password"
              />
            </div>
            <div>
              <TextInput
                value={registerData.confirmPassword}
                onChange={(e) => handleChange(e.target.value, "confirmPassword")}
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="confirm-password"
                required
                className="login-input rounded-b-md"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
            >
              {isLoading ? <Loader /> : "Create Account"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;

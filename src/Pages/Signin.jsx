import React from "react";
import image from "../img/image.jpg";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { Link } from "react-router";
import googleIcon from "../img/google-icon.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

function Signin() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      toast.error("Invalid email or password");
    },
  });

  return (
    <div className="min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-center font-roboto m-0 p-0 min-h-screen">
        {/* Right Section */}
        <div className="py-8 px-6 sm:px-12 md:px-28 w-full lg:w-5/12">
          <div className="header mb-4 text-center md:text-left">
            <h2 className="text-6xl font-bold">Welcome</h2>
            <h6 className="text-lg text-gray-400">Sign in to continue</h6>
          </div>
          <div className="signin-google mb-4">
            <button className="py-2 text-center border border-gray-500 rounded-md w-full flex items-center justify-center hover:bg-gray-100">
              <span>
                <img src={googleIcon} alt="Google Icon" className="w-6" />
              </span>
              <span className="mx-2 font-medium">Sign in with Google</span>
            </button>
          </div>
          <div className="mb-8">
            <div className="w-full text-center text-gray-400">
              <span>Or</span>
              <hr className="h-px bg-gray-200 border-0" />
            </div>
          </div>
          <div className="form">
            {/* Form */}
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <Input
                  label="Email"
                  type="text"
                  placeholder="Enter your email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <span className="text-xs text-red-600">
                    {formik.errors.email}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password && (
                  <span className="text-xs text-red-600">
                    {formik.errors.password}
                  </span>
                )}
              </div>
              <div className="mb-4 text-right">
                <Link className="text-gray-500 font-bold">
                  Forgot Password ?
                </Link>
              </div>
              <div className="w-full mb-4">
                <Button className="w-full">Sign in</Button>
              </div>
            </form>
          </div>
          <div className="loginhere text-center md:text-left">
            <span className="text-gray-500">
              Don't have an account?{" "}
              <Link className="text-gray-700 font-bold" to="/signup">
                Sign up
              </Link>
            </span>
          </div>
        </div>
        {/* Left Section*/}
        <div className="hidden md:block md:w-7/12">
          <div className="h-full">
            <img
              className="w-full h-screen object-cover rounded-l-3xl"
              src={image}
              alt="Signin visual"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;

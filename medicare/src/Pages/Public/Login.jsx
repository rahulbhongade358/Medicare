import React from "react";
import { useForm } from "react-hook-form";
import Login1 from "./../../assets/Doctors/login/Login1.png";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const Submit = (Data) => console.log(Data);
  return (
    <>
      <div className="font-serif bg-[#B3E5FC] text-gray-600 flex flex-col lg:flex-row justify-around items-center px-10 py-6">
        <img
          src={Login1}
          className="max-w-[450px] mb-8 lg:mb-0"
          alt="Login Visual"
        />

        <div className="w-full max-w-[450px] text-center  p-6 rounded-4xl shadow-xl  text-3xl">
          <h1 className="mb-6">Login Form</h1>

          <form
            onSubmit={handleSubmit(Submit)}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-full max-w-md">
              <input
                type="text"
                placeholder="Username"
                {...register("username", { required: true })}
                className="w-full text-center text-xl bg-transparent border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-gray-500"
              />
              {errors.username && (
                <p className="text-red-600 text-sm mt-1 text-center">
                  *This field is required*
                </p>
              )}
            </div>

            <div className="w-full max-w-md">
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
                className="w-full text-center text-xl bg-transparent border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-gray-500"
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1 text-center">
                  *This field is required*
                </p>
              )}
            </div>

            <div>
              <input
                type="submit"
                value="Submit"
                className="bg-blue-500 text-2xl hover:bg-blue-600 transition-colors duration-200 text-white font-semibold rounded-2xl px-6 py-3 cursor-pointer shadow-md"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import LogInCredential from "./LogInCredential";

const LogIn = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        reset(data);
        const user = result.user;
        Swal.fire({
          title: `${user.displayName} wellcome`,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };

  return (
    <section className=" dark:bg-slate-950 dark:border-b-2 dark:border-b-slate-900">
      <div className="container mx-auto flex justify-center items-center py-16">
        <div className="card lg:w-1/3 shadow-2xl bg-base-100 dark:bg-slate-800 dark:text-slate-300">
          <h1 className=" text-4xl font-bold">Log In</h1>
          <form onSubmit={handleSubmit(onSubmit)} className=" w-full">
            <div className="form-control">
              <label className="label">
                <span className="">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}

              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Log In" />
            </div>
          </form>
          <p className=" text-error font-semibold">{error}</p>
          <p>
            New to SnapSchool??
            <span className=" text-primary font-bold mt-3">
              <Link to="/signup">SignUp</Link>
            </span>
          </p>
          <SocialLogin></SocialLogin>
          <LogInCredential></LogInCredential>
        </div>
      </div>
    </section>
  );
};

export default LogIn;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";

const Login = () => {

  const {logIn} = useContext(AuthContext)

  const {
    register, handleSubmit,formState: { errors },} = useForm()

  const onSubmit = (data) => {
    logIn(data.email,data.password)
    .then(result=>{
      const user = result.user
      console.log(user)
    })
  }

  return (
    <>
    <Helmet>
      <title>Bistro Boss | Login</title>
    </Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl font-bold text-center">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email")}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                {...register("password")}
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <Link to='/signUp'>Sign Up</Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;

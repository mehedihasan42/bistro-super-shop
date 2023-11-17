import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const { signUp,updateUser } = useContext(AuthContext);

  const {register,handleSubmit,formState: { errors },} = useForm();

  const onSubmit = (data) => {
    console.log(data.name)
    signUp(data.email,data.password)
    .then(result=>{
      const user = result.user
      console.log(user)
      updateUser(data.name)
      .then(()=>{})
      .catch(error=>console.error(error))
    })
  };

  return (
   <>
   <Helmet>
    <title>Bistro Boss | Sign up</title>
   </Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl font-bold text-center">Sign up now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                {...register("name")}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email")}
                className="input input-bordered"
              />
              
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                {...register("password",{required:true,minLength:6})}
                className="input input-bordered"
                required
              />
              {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 charecter or more</p>}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
   </>
  );
};

export default SignUp;

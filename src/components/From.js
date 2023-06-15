import React from "react";
import bgImg from "../assets/img1.jpg";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Sign In</h2>
          <span>Register and enjoy the service</span>
          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              {...register("username", { required: true, maxLength: 10 })}
              placeholder="username"
            />
            {errors.username?.type === "required" && "username is require"}
            {errors.username?.type === "minLength" && "username is't correct"}
            {errors.username?.type === "maxLength" && "username is't correct"}

            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 15,
              })}
              placeholder="password"
            />
            {errors.password?.type === "required" && "password is require"}
            {errors.password?.type === "minLength" && "password is't correct"}
            {errors.password?.type === "maxLength" && "password is't correct"}

            <input
              type="password"
              {...register("confirmPWD", {
                required: true,
                minLength: 8,
                maxLength: 15,
              })}
              placeholder="confirm password"
            />
            {errors.confirmPWD?.type === "required" &&
              "confirm password is require"}
            {errors.confirmPWD?.type === "minLength" &&
              "confirm password is't correct"}
            {errors.confirmPWD?.type === "maxLength" &&
              "confirm password isn't correct"}

            <input
              type="text"
              {...register("mobile", {
                required: true,
                minLength: 11,
                maxLength: 11,
              })}
              placeholder="Phone number"
            />
            {errors.mobile?.type === "required" && "Mobile number is require"}
            {errors.mobile?.type === "minLength" &&
              "Mobile number isn't correct"}
            {errors.mobile?.type === "maxLength" &&
              "Mobile number isn't correct"}

            <button className="btn">Sign In</button>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="Image" />
        </div>
      </div>
    </section>
  );
}

"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const defaultFormData = {
  email: "",
  name: "",
  password: "",
};

const Auth = () => {
  const inputStyles =
    "border border-gray-300 sm:text-sm text-black rounded-lg block p-2.5 focus:outline-none w-full";

  const [formData, setFormData] = useState(defaultFormData);

  // square brackets to dynamically change name key in formData
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(formData);
    } catch (error) {
      console.log(error);
    } finally {
      setFormData(defaultFormData);
    }
  };

  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Create an Account
          </h1>
          <p>OR</p>
          <span className="inline-flex items-center">
            <AiFillGithub className="mr-3 text-4xl cursor-pointer text-black dark:text-white" />
            |
            <FcGoogle className="ml-3 text-4xl cursor-pointer" />
          </span>
        </div>

        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="yourname@email.com"
            className={inputStyles}
            onChange={handleInputChange}
            required
          />
          <input
            type="name"
            name="name"
            value={formData.name}
            placeholder="John Doe"
            className={inputStyles}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            minLength={6}
            className={inputStyles}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign Up
          </button>
        </form>

        <button className="text-blue-700 underline">Login</button>
      </div>
    </section>
  );
};
export default Auth;

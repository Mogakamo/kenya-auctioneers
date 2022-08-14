import React from "react";

const LoginForm = () => {
  return (
    <div className="bg-[#BED7C1E5] h-screen flex justify-center items-center flex-col p-10">
      {/* Logo */}
      <div className="logo">
        <h1>Kenyan Auctioneers</h1>
      </div>
      <p className="my-10">Welcome back to Kenyan Auctioneers</p>
      <div className="my-10 space-y-10 w-full">
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input type="text" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input type="password" />
        </div>
        <div className="">
          <button className="border px-8 py-3 w-full">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

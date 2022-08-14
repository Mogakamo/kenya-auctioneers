import LoginForm from "@/components/forms/LoginForm";
import React from "react";

const login = () => {
  return (
    <div className="grid grid-cols-2 h-screen w-full">
      <div className="left">Image</div>
      <div className="right"><LoginForm /></div>
    </div>
  );
};

export default login;

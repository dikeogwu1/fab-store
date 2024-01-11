import React from "react";
// import { Navigate } from "react-router-dom";
type protection = {
  children: React.ReactNode;
};

const Auth = ({ children }: protection) => {
  return children;
  // return <Navigate to='/' />;
};

export default Auth;

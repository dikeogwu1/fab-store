import { useEffect } from "react";
import LoginLayout from "../layouts/LoginLayout";

const Login = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <LoginLayout />
    </>
  );
};

export default Login;

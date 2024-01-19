import { useEffect } from "react";
import Authenticate from "../layouts/Authenticate";

const Login = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Authenticate isRegister={false} />
    </>
  );
};

export default Login;

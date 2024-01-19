import { useEffect } from "react";
import Authenticate from "../layouts/Authenticate";

const Register = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Authenticate isRegister={true} />
    </>
  );
};

export default Register;

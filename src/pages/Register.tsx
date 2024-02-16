import { useEffect } from "react";
import RegisterLayout from "../layouts/RegisterLayout";

const Register = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <RegisterLayout />
    </>
  );
};

export default Register;

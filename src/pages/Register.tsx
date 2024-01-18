import { useEffect } from "react";
import Authenticate from "../layouts/Authenticate";

const Register = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div>
      <Authenticate isRegister={true} />
    </div>
  );
};

export default Register;

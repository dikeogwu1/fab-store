import { useEffect } from "react";
import Navbar2 from "../components/Navbar2";
import ProfileLayout from "../layouts/ProfileLayout";
import Footer from "../components/Footer";

const Profile = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Navbar2 />
      <ProfileLayout />
      <Footer />
    </>
  );
};

export default Profile;

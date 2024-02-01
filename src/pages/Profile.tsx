import { useEffect } from "react";
import Navbar2 from "../components/Navbar2";
import ProfileLayout from "../layouts/ProfileLayout";
import Footer from "../components/Footer";
// redux
import { useDispatch } from "react-redux";
import { closeProductDropDown, closeShopDropDown } from "../features/modal";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(closeShopDropDown());
    dispatch(closeProductDropDown());
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

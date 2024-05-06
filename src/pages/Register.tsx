import React from "react";
import RegisterPageContainer from "../containers/RegisterPageContainer";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Register: React.FC = () => {
  return (
    <>
      <Header />
      <RegisterPageContainer />
      <Footer />
    </>
  );
};

export default Register;

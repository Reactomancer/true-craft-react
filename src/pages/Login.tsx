import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginPageContainer from "../containers/LoginPageContainer";

const Login: React.FC = () => {
  return (
    <>
      <Header />
      <LoginPageContainer />
      <Footer />
    </>
  );
};

export default Login;

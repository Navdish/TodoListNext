import Login from "@/app/login/page";
import { Component } from "react";

const withAuth = (Component: any) => {
  const Auth = (props:any) => {
    const { isLoggedIn } = props;

    if (!isLoggedIn) {
      return (
        <Login />
      );
    }
    return (
      <Component {...props} />
    );
  };
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
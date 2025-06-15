import React, { useEffect, useRef } from "react";
import { mount } from "dashboard/DashboardApp";
import { useHistory } from "react-router-dom";

const AuthApp = ({ setisLoggedIn, isLoggedIn }) => {
  const divRef = useRef();
  const history = useHistory();

  const onNavigate = (location) => {};

  useEffect(() => {
    mount(divRef.current);
  }, []);

  return <div ref={divRef} />;
};

export default AuthApp;

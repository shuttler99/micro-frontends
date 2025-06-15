import React, { useEffect, useRef } from "react";
import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";

const AuthApp = ({ setisLoggedIn, isLoggedIn }) => {
  const divRef = useRef();
  const history = useHistory();

  const onNavigate = (location) => {
    if (history.location.pathname !== location.pathname) {
      history.push(location.pathname);
    }
  };

  const signedIn = () => {
    setisLoggedIn(true);
  };

  useEffect(() => {
    const { onParentNavigate } = mount(divRef.current, {
      onNavigate: onNavigate,
      initialPath: history.location.pathname,
      onSignedIn: signedIn,
    });

    const unlisten = history.listen(onParentNavigate);

    return () => {
      unlisten();
    };
  }, []);

  return <div ref={divRef} />;
};

export default AuthApp;

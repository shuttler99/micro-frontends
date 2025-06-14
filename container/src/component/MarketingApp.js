import React, { useEffect, useRef } from "react";
import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

const MarketingApp = () => {
  const divRef = useRef();
  const history = useHistory();

  const onNavigate = (location) => {
    if (history.location.pathname !== location.pathname) {
      history.push(location.pathname);
    }
  };

  useEffect(() => {
    const { onParentNavigate } = mount(divRef.current, {
      onNavigate: onNavigate,
      initialPath: history.location.pathname,
    });

    const unlisten = history.listen(onParentNavigate);

    return () => {
      unlisten();
    };
  }, []);

  return <div ref={divRef} />;
};

export default MarketingApp;

import { useEffect } from "react";
import { mount } from "marketing/MarketingApp";
import { useRef } from "react";
import React from "react";

const MarketingApp = () => {
  const divRef = useRef();
  console.log(divRef.current);
  useEffect(() => {
    mount(divRef.current);
  }, []);
  return <div ref={divRef}></div>;
};

export default MarketingApp;

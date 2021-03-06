import React from "react";
import { useSelector } from "react-redux";

import "./styles.scss";

const Footer = () => {
  const counter = useSelector((state) => state.counter);
  return <div className="footer">Blue Footer ({counter})</div>;
};

export default Footer;

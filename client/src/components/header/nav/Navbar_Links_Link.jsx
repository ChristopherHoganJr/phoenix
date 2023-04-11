import React from "react";
import { Link } from "react-router-dom";

const Navbar_Links_Link = ({ url, title }) => {
  return <Link to={url}>{title}</Link>;
};

export default Navbar_Links_Link;

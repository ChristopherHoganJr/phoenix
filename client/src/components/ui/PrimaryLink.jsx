import React from "react";
import { Link } from "react-router-dom";

const PrimaryLink = ({ url, title }) => {
  return (
    <Link
      to={url}
      className='border-2 border-red-600 bg-black text-red-600 py-2 px-6 rounded-full text-xl'>
      {title}
    </Link>
  );
};

export default PrimaryLink;

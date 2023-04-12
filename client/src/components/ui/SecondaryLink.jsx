import React from "react";
import { Link } from "react-router-dom";

const SecondaryLink = ({ url, title }) => {
  return (
    <Link
      to={url}
      className='bg-red-600 py-2 px-6 rounded-full text-xl border-2 border-black text-black'>
      {title}
    </Link>
  );
};

export default SecondaryLink;

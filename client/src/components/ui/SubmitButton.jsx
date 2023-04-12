import React from "react";

const SubmitButton = ({ title, submitFunction }) => {
  return (
    <button
      className='py-2 px-6 bg-green-600 rounded-md text-white'
      onClick={(e) => submitFunction(e)}>
      {title}
    </button>
  );
};

export default SubmitButton;

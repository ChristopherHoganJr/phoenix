import React from "react";

const SubmitButton = ({ title, submitFunction }) => {
  return <button onClick={(e) => submitFunction(e)}>{title}</button>;
};

export default SubmitButton;

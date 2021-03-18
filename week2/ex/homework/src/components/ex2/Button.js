import React from "react";

const Button = ({ onClickEvent }) => {
  return (
    <div>
      <button class="btn btn-secondary" onClick={onClickEvent}>
        {" "}
        Get Dog
      </button>
    </div>
  );
};

export default Button;

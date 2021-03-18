import React from "react";

const Button = ({ onClickEvent }) => {
  return (
    <div>
      <button class="btn btn-secondary" onClick={onClickEvent}>
        {" "}
        Get Friend
      </button>
    </div>
  );
};

export default Button;

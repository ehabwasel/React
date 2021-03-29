import React from "react";

const Button = ({ onClickEvent, disabled }) => {
  return (
    <div>
      <button className="btn" type="submit" disabled={disabled} onClick={onClickEvent}>
        Get City
      </button>
    </div>
  );
};

export default Button;

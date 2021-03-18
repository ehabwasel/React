import React from "react";

const Button = ({ onClickEvent, disabled }) => {
  return (
    <div>
      <div>
        <h5> Write City to Enable the Button</h5>
      </div>
      <button className="btn" type="submit" disabled={disabled} onClick={onClickEvent}>
        Get City
      </button>
    </div>
  );
};

export default Button;

import React from "react";
import Icons from "../../atoms/icons";

const DropDown = ({ label }) => {
  return (
    <div>
      {label}
      <Icons src={"keyDown"} width={10} height={10} />
    </div>
  );
};

export default DropDown;

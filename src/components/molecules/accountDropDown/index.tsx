import { Avatar } from "@mui/material";
import React from "react";
import Icons from "../../atoms/icons";

const AccountDropDown = () => {
  return (
    <div>
      <Avatar />
      <Icons src={"keyDown"} width={10} height={10} />
    </div>
  );
};

export default AccountDropDown;

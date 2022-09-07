import { Checkbox } from "@mui/material";
import React from "react";

const CheckBoxComponent = ({ checked, label }) => {
  return (
    <div>
      <Checkbox checked={checked}>{label}</Checkbox>
    </div>
  );
};

export default CheckBoxComponent;

import { Box } from "@mui/material";
import React from "react";
import Icons from "../../atoms/icons";
import TypographyComponent from "../../atoms/typography";

const DeliveryDropDown = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Icons src={"bus"} height={10} width={10} />
        <TypographyComponent text={"standard: 4hours"} />
        <Icons src={"keyDown"} height={10} width={10} />
      </Box>
    </div>
  );
};

export default DeliveryDropDown;

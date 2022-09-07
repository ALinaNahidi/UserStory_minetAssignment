import { Box } from "@mui/material";
import React from "react";
import ButtonComponent from "../../atoms/button";
import TypographyComponent from "../../atoms/typography";
import AccountDropDown from "../../molecules/accountDropDown";

const Header = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Box>
          <TypographyComponent text={"Dashboard"} />
        </Box>
        <Box>
          <ButtonComponent text={"Sell"} />
          <ButtonComponent text={"Buy"} />
          <AccountDropDown />
        </Box>
      </Box>
    </div>
  );
};

export default Header;

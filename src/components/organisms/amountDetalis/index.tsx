import { Button, Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ButtonComponent from "../../atoms/button";
import TypographyComponent from "../../atoms/typography";

const AmountDetails = ({data}) => {
  return (
    <div>
      <Card>
        <TypographyComponent text={"Amount Details"} />
        <Card>
          <Box sx={{ display: "flex"}}>
            <TypographyComponent text={data.price} />
            <ButtonComponent text={"Sell max"} />
          </Box>
        </Card>
        <Card>
          <Box sx={{ display: "flex"}}>
            <TypographyComponent text={data.balance} />
            <TypographyComponent text={data.type} />
          </Box>
        </Card>
      </Card>
    </div>
  );
};

export default AmountDetails;

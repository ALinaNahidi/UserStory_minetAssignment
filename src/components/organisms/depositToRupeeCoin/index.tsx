import { Box, Card } from "@mui/material";
import React from "react";
import Icons from "../../atoms/icons";
import TypographyComponent from "../../atoms/typography";

const DepositToRupeeCoin = ({ data }) => {
  return (
    <div>
      <Card>
        <TypographyComponent text={"Deposit to"} />
        <Card>
          <Box sx={{ display: "flex" }}>
            <Icons src={data.transport} height={20} width={20} />
            <TypographyComponent text={data.time} />
            <TypographyComponent text={data.fee} />
          </Box>
        </Card>
      </Card>
    </div>
  );
};

export default DepositToRupeeCoin;

import { Card } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PaymentCrypto from "../../molecules/paymentCrypto";

const CryptoCurrency = ({ data }) => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        {data.map((item)=>{
          <PaymentCrypto data={item}/>
        })}
      </Box>
    </div>
  );
};

export default CryptoCurrency;

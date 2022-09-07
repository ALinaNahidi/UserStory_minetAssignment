import { Box } from '@mui/material';
import React from 'react'
import Icons from '../../atoms/icons';
import TypographyComponent from '../../atoms/typography';

const PaymentCrypto = ({data}) => {
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Icons src={data.src} height={50} width={50} />
        <TypographyComponent text={data.name} />
        <TypographyComponent text={data.price} />
      </Box>
    </div>
  );
}

export default PaymentCrypto
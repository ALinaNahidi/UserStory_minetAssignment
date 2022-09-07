import { Box } from '@mui/system';
import React from 'react'
import Icons from '../../atoms/icons';
import TypographyComponent from '../../atoms/typography';

const PaymentCard = ({cardType}) => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Icons src={"radioActive"} height={10} width={10} />
        <TypographyComponent text={"Endind in : ...8845"} />
        <Icons src={cardType} height={10} width={10} />
      </Box>
    </div>
  );
}

export default PaymentCard
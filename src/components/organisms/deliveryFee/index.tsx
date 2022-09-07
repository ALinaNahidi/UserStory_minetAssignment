import { Box } from '@mui/material';
import React from 'react'
import Icons from '../../atoms/icons';
import TypographyComponent from '../../atoms/typography';

const DeliveryFee = ({data}) => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Icons src={data.transport} height={20} width={20} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TypographyComponent text={data.time} />
          <TypographyComponent text={data.fee} />
        </Box>
        <Icons src={"downArrow"} height={10} width={10} />
      </Box>
    </div>
  );
}

export default DeliveryFee
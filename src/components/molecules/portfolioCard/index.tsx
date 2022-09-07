import { Box } from '@mui/material';
import React from 'react'
import Icons from '../../atoms/icons';
import TypographyComponent from '../../atoms/typography';

const PortfolioCard = (data) => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Icons src={data.img} height={50} width={50} />
        <TypographyComponent text={data.currencyType} />
        <TypographyComponent text={data.currencyValue} />
      </Box>
    </div>
  );
}

export default PortfolioCard
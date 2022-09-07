import { Box } from '@mui/material';
import React from 'react'
import Icons from '../../atoms/icons';
import TypographyComponent from '../../atoms/typography';

const WalletTransactionTabs = ({data}) => {
  return (
    <div>
      {" "}
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TypographyComponent text={data.date.month} />
          <TypographyComponent text={data.date.day} />
        </Box>
        <Icons src={data.img} height={25} width={25} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TypographyComponent text={data.name} />
          <TypographyComponent text={data.status} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TypographyComponent text={data.change} />
          <TypographyComponent text={data.total} />
        </Box>
      </Box>
    </div>
  );
}

export default WalletTransactionTabs
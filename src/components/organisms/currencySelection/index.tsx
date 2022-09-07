import { Box } from '@mui/material';
import React from 'react'
import CurrencyChip from '../../molecules/currencyChip';

const CurrencySelection = ({data}) => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        {data.map((item) => {
          <CurrencyChip label={item.currency} />;
        })}
      </Box>
    </div>
  );
}

export default CurrencySelection
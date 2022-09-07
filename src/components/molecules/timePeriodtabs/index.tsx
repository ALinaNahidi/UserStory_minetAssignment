import { Box } from '@mui/system';
import React from 'react'
import TypographyComponent from '../../atoms/typography';

const TimePeriodTabs = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <TypographyComponent text={"1hr"} />
        <TypographyComponent text={"24hr"} />
        <TypographyComponent text={"1W"} />
      </Box>
    </div>
  );
}

export default TimePeriodTabs
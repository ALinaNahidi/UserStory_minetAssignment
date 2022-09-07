import { Box } from '@mui/material';
import React from 'react'
import Icons from '../../atoms/icons';
import TypographyComponent from '../../atoms/typography';
import WatchListStar from '../../atoms/watchListStar';

const TradeTabs = ({data}) => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Icons src={data.img} height={25} width={25} />
        <TypographyComponent text={data.name} />
        <TypographyComponent text={data.price} />
        <TypographyComponent text={data.change} />
        <WatchListStar filled={true}/>
      </Box>
    </div>
  );
}

export default TradeTabs
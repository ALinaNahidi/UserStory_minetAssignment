import { Box } from '@mui/material';
import React from 'react'
import ButtonComponent from '../../atoms/button';
import TypographyComponent from '../../atoms/typography';

const Footer = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Box>
          <TypographyComponent text={"Dashboard"} />
          <TypographyComponent text={"Careers"} />
          <TypographyComponent text={"Legal&Privecy"} />
          <TypographyComponent text={"© 2021 Minet"} />
        </Box>
        <Box>
          <ButtonComponent text={"Need Help"} />
        </Box>
      </Box>
    </div>
  );
}

export default Footer
import { Button, Tooltip } from '@mui/material';
import React from 'react'
import TypographyComponent from '../../atoms/typography';

const ToolTipNav = () => {
  return (
    <div>
      <Tooltip title="Add" placement="right-start">
        <TypographyComponent text={"Dashboard"} />
      </Tooltip>
    </div>
  );
}

export default ToolTipNav
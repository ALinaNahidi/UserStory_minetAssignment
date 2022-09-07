import React from "react";

const ColumnHeader = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <div>Name</div>
        <div>Price</div>
        <div>Change</div>
      </Box>
    </div>
  );
};

export default ColumnHeader;

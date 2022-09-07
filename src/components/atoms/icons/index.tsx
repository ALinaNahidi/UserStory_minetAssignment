import React from "react";

const Icons = ({ src, width, height }) => {
  return (
    <div>
      <img src={src} style={{ width: width, height: height }} />
    </div>
  );
};

export default Icons;

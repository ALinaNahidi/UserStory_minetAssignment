import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const WatchListStar = ({ filled }) => {
  return <div>{filled ? <StarIcon /> : <StarBorderIcon />}</div>;
};

export default WatchListStar;

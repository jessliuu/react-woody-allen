import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Button from "@mui/material/Button";

// import ThumbDownIcon from ‘@material-ui/icons/ThumbDown’;
// import Button from ‘@material-ui/core/Button’;

import React, { useEffect, useState } from "react";

function Likes() {
  const [count, setCount] = useState(0);

  const handleClickLike = () => {
    setCount(count + 1);
    console.log(count);
    if (count === 1) {
      setCount(0);
    }
  };

  // useEffect(() => {});

  return (
    <div>
      <Button onClick={() => handleClickLike()}>
        {count % 2 === 0 ? <ThumbUpIcon color="disabled" /> : <ThumbUpIcon />}
      </Button>
    </div>
  );
}

export default Likes;

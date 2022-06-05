import { IconButton, IconButtonProps } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

function ButtonSend(props: IconButtonProps) {
  return (
    <IconButton aria-label="send" {...props} color="primary">
      <SendIcon />
    </IconButton>
  );
}

export default ButtonSend;

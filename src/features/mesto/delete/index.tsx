import React from "react";
import { IconButton } from "shared";
import "./index.scss";

export const DeleteButton = () => {
  return (
    <IconButton
      type="button"
      onClick={() => console.log("mesto deleted")}
      className="trash-btn"
    >
      <i className="pi pi-trash"></i>
    </IconButton>
  );
};

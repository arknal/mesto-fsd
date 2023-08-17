import React, { FC, ReactNode } from "react";
import "./index.scss";

interface IGridProps {
  children: ReactNode;
}

export const Grid: FC<IGridProps> = (props) => {
  return <section className="grid">{props.children}</section>;
};

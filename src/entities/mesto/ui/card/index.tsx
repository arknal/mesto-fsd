import "./index.scss";
import { FC, ReactNode } from "react";
import { Mesto } from "shared/api/models";

type CardProps = {
  children: ReactNode;
} & Mesto;

export const Card: FC<CardProps> = (props) => {
  return (
    <article className="card">
      <img src={props.link} alt={props.name} className="card__image" />
      <div className="card__info">
        <h2 className="card__title">{props.name}</h2>
        <div className="card__control">{props.children}</div>
      </div>
    </article>
  );
};

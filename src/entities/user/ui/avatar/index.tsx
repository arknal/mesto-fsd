import "./index.scss";
import { FC } from "react";
import { createClassName } from "shared/utils/helpers";

interface IAvatarProps {
  src: string;
  alt: string;
  size: "large" | "medium" | "small";
  className?: string;
}

export const Avatar: FC<IAvatarProps> = (props) => {
  const className = createClassName(
    ["user-avatar", `user-avatar_size_${props.size}`],
    props.className,
  );
  return <img src={props.src} alt={props.alt} className={className} />;
};

import { FC, useState } from "react";
import { IconButton } from "shared/ui";
import "./index.scss";

interface ILikeButtonProps {
  likes: string[];
  cardId: string;
}

export const LikeButton: FC<ILikeButtonProps> = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <IconButton
      type="button"
      className="like-btn"
      onClick={() => setIsLiked(!isLiked)}
    >
      <i
        className={`pi ${
          isLiked ? "pi-heart-fill like-btn_liked" : "pi-heart"
        }`}
      ></i>
      999
    </IconButton>
  );
};

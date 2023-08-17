import { FC } from "react";
import { IconButton } from "shared/ui";
import { Feedback } from "shared/api/models";

interface ICommentButtonProps {
  comments: Feedback[];
  cardId: string;
}

export const CommentButton: FC<ICommentButtonProps> = (props) => {
  return (
    <IconButton
      type="button"
      className="like-btn"
      onClick={() => console.log("opened popup", props.cardId)}
    >
      <i className="pi pi-comment"></i>
      999
    </IconButton>
  );
};

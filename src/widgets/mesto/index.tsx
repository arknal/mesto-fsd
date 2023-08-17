import React, { FC } from "react";
import { Card } from "entities/mesto/ui/card";
import { Mesto } from "shared/api/models";
import { DeleteButton, LikeButton } from "features/mesto";
import { CommentButton } from "features/mesto/comment";

export const MestoWidget: FC<Mesto> = (props) => {
  return (
    <Card {...props}>
      <LikeButton likes={props.likes} cardId={props._id} />
      <CommentButton comments={props.comments} cardId={props._id} />
      <DeleteButton />
    </Card>
  );
};

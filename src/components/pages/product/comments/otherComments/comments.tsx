import { CommentsType } from "@/types/products/commentsType";
import { OthersCommentsComponent } from "./comments.style";
import setStars from "../setStars";
import Image from "next/image";

export default function OtherComments(comments: Array<CommentsType>) {
  const date = (date: Date) => {
    const getDate = new Date(date);
    const curruntDate = `${new Date(date).getDay()} de ${getDate
      .toLocaleString("default", { month: "long" })
      .slice(0, 3)}. ${new Date(date).getFullYear()}`;
    return curruntDate;
  };

  return (
    <OthersCommentsComponent.Conteiner>
      <OthersCommentsComponent.CommentsConteiner>
        {comments?.map((comment) => (
          <OthersCommentsComponent.CommentsCase key={comment.id}>
            <OthersCommentsComponent.TopArea>
              <OthersCommentsComponent.CommentStarsCase>
                {setStars(comment.stars)}
              </OthersCommentsComponent.CommentStarsCase>
              <OthersCommentsComponent.CommentDateCase>
                {date(comment.createdAt)}
              </OthersCommentsComponent.CommentDateCase>
            </OthersCommentsComponent.TopArea>
            <OthersCommentsComponent.TitleArea>
              {comment.title}
            </OthersCommentsComponent.TitleArea>
            <OthersCommentsComponent.BottomArea>
              <OthersCommentsComponent.LikeButton>
                <Image src="/like.svg" width={15} height={15} alt="like" />
                {comment.likes}
              </OthersCommentsComponent.LikeButton>
              <OthersCommentsComponent.ReportButton>
                <Image src="/options.svg" width={20} height={20} alt="like" />
              </OthersCommentsComponent.ReportButton>
            </OthersCommentsComponent.BottomArea>
          </OthersCommentsComponent.CommentsCase>
        ))}
      </OthersCommentsComponent.CommentsConteiner>
    </OthersCommentsComponent.Conteiner>
  );
}

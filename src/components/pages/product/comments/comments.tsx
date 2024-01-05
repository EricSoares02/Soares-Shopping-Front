import { CommentsType } from "@/types/products/commentsType";
import { CommentsComponent } from "./comments.style";
import MyComment from "./myComments/commentMiniPage/comment";
import OtherComments from "./otherComments/comments";
import Reviews from "./reviewsComments/reviews";

type PropsType = {
  comments: Array<CommentsType>;
};

export default function Comments(props: PropsType) {

  return (
    <CommentsComponent.Conteiner>
      <CommentsComponent.TopSide>
        <CommentsComponent.ReviewSide>
          {Reviews(props.comments)}
        </CommentsComponent.ReviewSide>
        <CommentsComponent.CommentsSide>
          {OtherComments(props.comments)}
        </CommentsComponent.CommentsSide>
      </CommentsComponent.TopSide>
      {/* <CommentsComponent.BottomSide>{MyComment()}</CommentsComponent.BottomSide> */}
    </CommentsComponent.Conteiner>
  );
}

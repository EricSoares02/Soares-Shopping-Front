import { CommentsType } from "@/types/products/commentsType";
import { CommentsComponent } from "./comments.style";
import MyComment from "./myComments/comment";
import OtherComments from "./otherComments/comments";
import Reviews from "./reviewsComments/reviews";

type PropsType = {
  comments: Array<CommentsType>,
};

type ReviewsNumberPropsType = Array<CommentsType>;

export default function Comments(props: PropsType) {

  const reviewsNumber = (Comments: ReviewsNumberPropsType) =>{

    if (Comments.length===0) {
      return 0
    }

    let starsCount = 0
    const T = Comments.map((comment)=>{
      return starsCount = starsCount + comment.stars
    })

    return starsCount/Comments.length
  }

  
  return (
    <CommentsComponent.Conteiner>
      <CommentsComponent.ReviewSide>
      {Reviews(reviewsNumber(props.comments), props.comments.length)}
      </CommentsComponent.ReviewSide>
      <CommentsComponent.CommentsSide>
        {OtherComments(props.comments)}
        {/* {MyComment()} */}
      </CommentsComponent.CommentsSide>
    </CommentsComponent.Conteiner>
  );
}
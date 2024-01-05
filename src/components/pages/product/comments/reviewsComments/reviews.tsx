import { CommentsType } from "@/types/products/commentsType";
import setStars from "../setStars";
import PercentageRating from "./percentageRating/percentageRating";
import { ReviewsCommentsComponent } from "./reviews.style";

type ReviewsNumberPropsType = Array<CommentsType>;

export default function Reviews(props: ReviewsNumberPropsType) {


  const reviewsNumber = (Comments: ReviewsNumberPropsType) => {
    if (Comments.length === 0) {
      return 0;
    }

    let starsCount = 0;
    const T = Comments.map((comment) => {
      return (starsCount = starsCount + comment.stars);
    });

    return starsCount / Comments.length;
  };

 const percentageCalc = () =>{
return {
  fiveStars: 70,
  fourStars: 0,
  threeStars:0,
  twoStars: 0,
  oneStars: 0
}
 }


  return (
    <ReviewsCommentsComponent.Conteiner>
      <ReviewsCommentsComponent.Text>
        Opiniões Sobre o Produto
      </ReviewsCommentsComponent.Text>
      <ReviewsCommentsComponent.ReviewCase>
        {reviewsNumber(props).toFixed(1)}
        <ReviewsCommentsComponent.StarCase>
          <ReviewsCommentsComponent.Stars>
            {setStars(reviewsNumber(props))}
          </ReviewsCommentsComponent.Stars>
          {props.length} Avaliações
        </ReviewsCommentsComponent.StarCase>
      </ReviewsCommentsComponent.ReviewCase>
      {PercentageRating(percentageCalc())}
    </ReviewsCommentsComponent.Conteiner>
  );
}

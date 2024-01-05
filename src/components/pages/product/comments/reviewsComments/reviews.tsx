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

  const percentageCalc = (comments: ReviewsNumberPropsType) => {
    let five = 0;
    let four = 0;
    let three = 0;
    let two = 0;
    let one = 0;

    comments.map((comment) => {
      switch (comment.stars) {
        case 1:
          return one = one + 1;
        case 2:
          return two = two + 1;
        case 3:
          return three = three + 1;
        case 4:
          return four = four + 1;
        case 5:
          return five = five + 1;
        default:
      }
    });

    const T = {
      fiveStars: five * 100/comments.length,
      fourStars: four * 100/comments.length,
      threeStars: three * 100/comments.length,
      twoStars: two * 100/comments.length,
      oneStars: one * 100/comments.length,
    };

    console.log(T)
    return T
  };

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
      {PercentageRating(percentageCalc(props))}
    </ReviewsCommentsComponent.Conteiner>
  );
}

import setStars from "../setStars";
import { ReviewsCommentsComponent } from "./reviews.style";

export default function Reviews(props: number, reviewsNumber: number) {
  return (
    <ReviewsCommentsComponent.Conteiner>
      <ReviewsCommentsComponent.Text>
        Opiniões Sobre o Produto
      </ReviewsCommentsComponent.Text>
      <ReviewsCommentsComponent.ReviewCase>
        {props.toFixed(1)}
        <ReviewsCommentsComponent.StarCase>
          <ReviewsCommentsComponent.Stars>
            {setStars(props)}
          </ReviewsCommentsComponent.Stars>
          {reviewsNumber} Avaliações
        </ReviewsCommentsComponent.StarCase>
      </ReviewsCommentsComponent.ReviewCase>
    </ReviewsCommentsComponent.Conteiner>
  );
}

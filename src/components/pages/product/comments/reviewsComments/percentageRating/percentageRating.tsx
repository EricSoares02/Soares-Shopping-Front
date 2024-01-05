import Star from "@/utils/stars/star";
import { PercentageRatingComponent } from "./percentageRating.style";
import { PercentageVerify } from "./percentageVerify";

export interface PercentagePropsType {
  fiveStars: number;
  fourStars: number;
  threeStars: number;
  twoStars: number;
  oneStars: number;
}

export default function PercentageRating(Percentage: PercentagePropsType) {
  const starSize = 15;

  const verify = PercentageVerify(Percentage);

  return verify ? (
    <></>
  ) : (
    <PercentageRatingComponent.Conteiner>
      <PercentageRatingComponent.RatingCase>
        <PercentageRatingComponent.Rating>
          <PercentageRatingComponent.Percentage
            $percentage={Percentage.fiveStars}
          />
        </PercentageRatingComponent.Rating>
        <span>5</span>
        {Star(starSize)}
      </PercentageRatingComponent.RatingCase>
      <PercentageRatingComponent.RatingCase>
        <PercentageRatingComponent.Rating>
          <PercentageRatingComponent.Percentage
            $percentage={Percentage.fourStars}
          />
        </PercentageRatingComponent.Rating>
        <span>4</span>
        {Star(starSize)}
      </PercentageRatingComponent.RatingCase>
      <PercentageRatingComponent.RatingCase>
        <PercentageRatingComponent.Rating>
          <PercentageRatingComponent.Percentage
            $percentage={Percentage.threeStars}
          />
        </PercentageRatingComponent.Rating>
        <span>3</span>
        {Star(starSize)}
      </PercentageRatingComponent.RatingCase>
      <PercentageRatingComponent.RatingCase>
        <PercentageRatingComponent.Rating>
          <PercentageRatingComponent.Percentage
            $percentage={Percentage.twoStars}
          />
        </PercentageRatingComponent.Rating>
        <span>2</span>
        {Star(starSize)}
      </PercentageRatingComponent.RatingCase>
      <PercentageRatingComponent.RatingCase>
        <PercentageRatingComponent.Rating>
          <PercentageRatingComponent.Percentage
            $percentage={Percentage.oneStars}
          />
        </PercentageRatingComponent.Rating>
        <span>1</span>
        {Star(starSize)}
      </PercentageRatingComponent.RatingCase>
    </PercentageRatingComponent.Conteiner>
  );
}

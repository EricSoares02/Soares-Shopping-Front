import { PercentagePropsType } from "./percentageRating";

export function PercentageVerify(props: PercentagePropsType){

const {fiveStars, fourStars, oneStars, threeStars, twoStars} = props;
const maxPercentage = fiveStars + fourStars + oneStars + threeStars + twoStars;

if(maxPercentage>100 || maxPercentage<0){

return true

}

return false

}
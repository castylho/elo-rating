import { IELORatingOutput } from "./rateELO";

interface IUpdateRatingInput {
  firstRating: number;
  secondRating: number;
  firstWinningProbability: number;
  secondWinningProbability: number;
  isWinnerFirst: boolean;
  K: number;
}

export const updateRating = ({
  firstRating,
  secondRating,
  firstWinningProbability,
  secondWinningProbability,
  isWinnerFirst,
  K = 50,
}: IUpdateRatingInput): IELORatingOutput => {
  if (isWinnerFirst) {
    firstRating = firstRating + K * (1 - firstWinningProbability);
    secondRating = secondRating + K * (0 - secondWinningProbability);
  } else {
    firstRating = firstRating + K * (0 - firstWinningProbability);
    secondRating = secondRating + K * (1 - secondWinningProbability);
  }

  return {
    updatedFirstRating: firstRating,
    updatedSecondRating: secondRating,
  };
};

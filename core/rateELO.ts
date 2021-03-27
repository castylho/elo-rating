import { updateRating } from "./updateRating";

const calculateProbability = (
  firstRating: number,
  secondRating: number
): number => {
    //TODO: better naming to explain this calculus
  return (
    (1.0 * 1.0) /
    (1 + 1.0 * Math.pow(10, (1.0 * (firstRating - secondRating)) / 400))
  );
};

interface IELORatingInput {
  firstRating: number;
  secondRating: number;
  isWinnerFirst: boolean;
  K?: number;
}

export interface IELORatingOutput {
  updatedFirstRating: number;
  updatedSecondRating: number;
}

export const ratingELO = ({
  firstRating,
  secondRating,
  isWinnerFirst,
  K = 50,
}: IELORatingInput): IELORatingOutput => {
  // Calculate winnig probability 4 firstRating
  const firstProbability = calculateProbability(firstRating, secondRating);
  // console.log(`probabilityA ==> ${probabilityA}`)
  // Calculate winnig probability 4 secondRating
  const secondProbability = calculateProbability(secondRating, firstRating);
  // console.log(`probabilityB ==> ${probabilityB}`)

  // Update ratings
  const { updatedFirstRating, updatedSecondRating } = updateRating({
    firstRating,
    secondRating,
    firstWinningProbability: firstProbability,
    secondWinningProbability: secondProbability,
    isWinnerFirst,
    K,
  });

  return { updatedFirstRating, updatedSecondRating };
};

import { IResults } from "../model/results";
import { ratingELO } from "./rateELO";

export const compareData = (data: IResults[]): IResults[] => {
  for (let currIndex = 0; currIndex < data.length; currIndex++) {
    const curr = data[currIndex];

    for (let nextIndex = currIndex + 1; nextIndex < data.length; nextIndex++) {
      const next = data[nextIndex];

      const { updatedFirstRating, updatedSecondRating } = ratingELO({
        firstRating: curr.rating,
        secondRating: next.rating,
        isWinnerFirst: currIndex % 2 === 0,
      });

      //update array
      const newCurrent = { ...curr, rating: updatedFirstRating };
      const newNext = { ...next, rating: updatedSecondRating };
      data.splice(currIndex, 1, newCurrent);
      data.splice(nextIndex, 1, newNext);
    }
  }

  return data;
};

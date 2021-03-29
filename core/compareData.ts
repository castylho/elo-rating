import { IResults } from "../model/results";
import { question } from "../ui/interactions";
import { ratingELO } from "./rateELO";

export const compareData = async (data: IResults[]): Promise<IResults[]> => {
  for (let currIndex = 0; currIndex < data.length; currIndex++) {
    const curr = data[currIndex];

    for (let nextIndex = currIndex + 1; nextIndex < data.length; nextIndex++) {
      const next = data[nextIndex];

      const answer = await question([curr.title, next.title]);

      const { updatedFirstRating, updatedSecondRating } = ratingELO({
        firstRating: curr.rating,
        secondRating: next.rating,
        isWinnerFirst: answer === curr.title,
      });

      const newCurrent = { ...curr, rating: updatedFirstRating };
      const newNext = { ...next, rating: updatedSecondRating };
      data.splice(currIndex, 1, newCurrent);
      data.splice(nextIndex, 1, newNext);
    }
  }

  return data;
};

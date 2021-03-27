import { IResults } from "../model/results";

export const sortByRating = (a: IResults, b: IResults) => b.rating - a.rating;

export const sortByName = (a: IResults, b: IResults) => {
  if (a.title < b.title) return -1;
  if (a.title > b.title) return 1;
  return 0;
};

import { IResults } from "../model/results";

export const setDefaultRatings = (list: string): IResults[] =>
  list.split(`\n`).map((item) => ({
    title: item,
    rating: 1000,
  }));

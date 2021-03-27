import { IResults } from "../model/results";
import messages from "./strings";

const FIRST_CHOICE = 1;
const SECOND_CHOICE = 2;

const isInputValid = (userInput: string): boolean => {
  const convertedInput = Number(userInput);
  return convertedInput === FIRST_CHOICE || convertedInput === SECOND_CHOICE;
};

//TODO: implement
export const question = (): string => {
  const answer = "";
  return answer;
};

//TODO: passar apenas o console.log
export const showMessage = (message: string): void => {
  console.log(message);
};

//TODO: passar apenas o console.table
export const showResults = (data: IResults[]): void => {
  showMessage(messages.showResult)
  console.table(data);
};

import inquirer from "inquirer";
import { IResults } from "../model/results";
import messages from "./strings";

const generateQuestions = (options: string[]) => [
  {
    type: "list",
    name: "choice",
    message: messages.makeChoice,
    choices: options,
  },
];

export const question = async (options: string[]): Promise<string> => {
  const { choice } = await inquirer.prompt(generateQuestions(options));

  return choice;
};

export const showMessage = (message: string): void => console.log(message);

export const showResults = (data: IResults[]): void => {
  showMessage(messages.showResult);
  console.table(data);
};

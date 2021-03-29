import * as fs from "fs";
import { compareData } from "./core/compareData";
import { setDefaultRatings } from "./core/sanitizeUserInput";
import { sortByRating } from "./repository/resultMapper";
import { showMessage, showResults } from "./ui/interactions";
import messages from "./ui/strings";


const main = () => {
  const [filePath] = process.argv.slice(2);

  fs.readFile(filePath, "utf8", async (err, data) => {
    if (err) {
      return showMessage(err.message);
    }

    const newData = await compareData(setDefaultRatings(data));
    showResults(newData.sort(sortByRating));
    showMessage(messages.goodbye);
  });
};

main();

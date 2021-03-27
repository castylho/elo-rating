import * as fs from 'fs';

import { compareData } from "./core/compareData";
import { setDefaultRatings } from "./core/sanitizeUserInput";
import { sortByRating } from "./repository/resultMapper";
import { showMessage, showResults, question } from "./ui/interactions";
import messages from "./ui/strings";

const main = () => {
    /**
     * iniciar com ola
     * comeca loop
     *      faz pergunta -> valida resposta -> resposta valida === proxima comparaçao
     *      faz pergunta -> valida resposta -> resposta  === responder denovo
     * fim loop
     * exibiçao de dados na tabela
     */
    showMessage(messages.greetings)
    const [filePath] = process.argv.slice(2);

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          return showMessage(err.message);
        }
    
        // percorrer comparaçao
        // calcular rating
        // atualizar estado global
        const newData = compareData(setDefaultRatings(data));

        showResults(newData.sort(sortByRating))
      });


}

main()
require("colors");
const {
  inquirerMenu,
  inquirerPause,
  readInput,
} = require("./helpers/inquirer");
const Searching = require("./models/search");
let opt = "";
const Seach = new Searching();
Seach.city();
const main = async () => {
  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        const city = await readInput();

        break;
      default:
        break;
    }
    if (opt !== 0) {
      await inquirerPause();
    }
  } while (opt !== 0);
};

main();

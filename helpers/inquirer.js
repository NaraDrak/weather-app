const inquirer = require("inquirer");
require("colors");

const questions = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué desea hacer?",
    choices: [
      { value: 1, name: "1. Buscar ciudad" },
      { value: 2, name: "2. Historial" },
      { value: 0, name: "0. Salir" },
    ],
  },
];

const inquirerMenu = async () => {
  console.log("\n===================".green);
  console.log("Selecciona una opcioón".green);
  console.log("=================== \n".green);

  const { opcion } = await inquirer.prompt(questions);
  return opcion;
};
const inquirerPause = async () => {
  const pauseInput = [
    { type: "input", name: "pause", message: "Presiona ENTER para continuar" },
  ];

  const pause = await inquirer.prompt(pauseInput);
  return pause;
};

const readInput = async (message) => {
  const readTodo = [
    {
      type: "input",
      name: "description",
      message: message,
      validate(value) {
        if (value.length === 0) {
          return "Ingresa una tarea";
        }
        return true;
      },
    },
  ];
  const { description } = await inquirer.prompt(readTodo);
  return description;
};

const todoToDelete = async (todos = []) => {
  const choices = todos.map((todo, index) => {
    const idx = `${index + 1}.`.green;
    return { value: todo.id, name: `${idx} ${todo.description}` };
  });
  choices.unshift({
    value: "0",
    name: "0.".green + " Cancelar",
  });
  const questions = [
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices,
    },
  ];
  const { id } = await inquirer.prompt(questions);

  return id;
};

const showCheckList = async (todos = []) => {
  const choices = todos.map((todo, index) => {
    const idx = `${index + 1}.`.green;
    return {
      value: todo.id,
      name: `${idx} ${todo.description}`,
      checked: todo.completedAt ? true : false,
    };
  });
  /*   choices.unshift({
    value: "0",
    name: "0.".green + " Cancelar",
  }); */
  const questions = [
    {
      type: "checkbox",
      name: "ids",
      message: "Borrar",
      choices,
    },
  ];
  const { ids } = await inquirer.prompt(questions);

  return ids;
};

const confirMenu = async (message) => {
  const questions = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];
  const { ok } = await inquirer.prompt(questions);

  return ok;
};

module.exports = {
  inquirerMenu,
  inquirerPause,
  readInput,
  todoToDelete,
  confirMenu,
  showCheckList,
};

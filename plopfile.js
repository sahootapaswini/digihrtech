module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create a TypeScript React component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name?",
      },
      {
        type: "input",
        name: "path",
        message: "Component path (relative to src/components)?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{path}}/{{name}}.tsx",
        templateFile: "plop-templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{path}}/{{name}}.module.css",
        templateFile: "plop-templates/Component.module.css.hbs",
      },
    ],
  });
};

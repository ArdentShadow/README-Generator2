//Including packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

//Creating an array of questions for user input
const questions = [
  {
    type: "input",
    name: "What is the title of your project?",
    message: "Please name your Project.",
  },
  {
    type: "input",
    name: "Write a description of your project",
    message: "Please describe the purpose and functionality of this project.",
  },
  {
    type: "input",
    name: "link",
    message: "Paste a URL to where a user can access your deployed application."
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE", "GPlv2", "other", "none"],
  },
  {
    type: "input",
    name: "require",
    message: "List any project dependencies here.",
  },
  {
    type: "input",
    name: "features",
    message: "List some cool features about this project here.",
  },
  {
    type: "input",
    name: "creator",
    message: "Write your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Provide a valid email address.",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors, please use GitHub names ONLY",
    default: "",
  },
];

// Writing README.md File
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initializing app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    writeToFile("./DEMO/README.md", generateMarkdown({ ...responses }));
  });
}
init();

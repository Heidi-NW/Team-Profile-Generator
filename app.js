
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateTeam = require("./src/template.js");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "output.html");

let myTeam = [];
const createTeam = async () => {

    function getManagerInfo() {

        try {
            inquirer.prompt([{
                type: "input",
                message: "Please enter the team manager's name",
                name: "managerName"
            },
            {
                type: "input",
                message: "Please enter manager's ID",
                name: "managerId"
            },
            {
                type: "input",
                message: "Please enter manager's email",
                name: "managerEmail"
            },
            {
                type: "input",
                message: "Please enter office number",
                name: "managerOfficeNumber"
            }])
                .then(answers => {
                    const { managerName, managerId, managerEmail, managerOfficeNumber } = answers
                    const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
                    myTeam.push(manager);
                    getEmployeeInfo();
                });
        } catch (err) {
            console.log(err);
        }
    }

    function getEmployeeInfo() {
        try {
            inquirer
                .prompt([{
                    type: "confirm",
                    message: "Would you like to add an Employee?",
                    name: "addEmployee"
                },
                {
                    type: "list",
                    message: "Please choose the employee's role: ",
                    choices: ["Engineer", "Intern"],
                    name: "employeeRole",
                    when: answers => answers.addEmployee
                },
                {
                    type: "input",
                    message: "Enter the employee's name: ",
                    name: "employeeName",
                    when: answers => answers.addEmployee
                },
                {
                    type: "input",
                    message: "Enter the employee's ID: ",
                    name: "employeeId",
                    when: answers => answers.addEmployee
                },
                {
                    type: "input",
                    message: "Enter the employee's email: ",
                    name: "employeeEmail",
                    when: answers => answers.addEmployee
                },

                {
                    type: "input",
                    message: "Please enter the Github username: ",
                    name: "employeeGithub",
                    when: answers => answers.employeeRole === "Engineer"
                },
                {
                    type: "input",
                    message: "Please enter the school: ",
                    name: "employeeSchool",
                    when: answers => answers.employeeRole === "Intern"
                }])
                .then(data => {
                    console.log(data)
                    const { employeeName, employeeId, employeeEmail, employeeRole, employeeGithub, employeeSchool } = data;
                    if (employeeRole == "Engineer") {
                        const engineer = new Engineer(employeeName, employeeId, employeeEmail, employeeGithub);
                        myTeam.push(engineer);    
                    } 
                    else if (employeeRole === "Intern") {
                        const employee = new Intern(employeeName, employeeId, employeeEmail, employeeSchool);
                        myTeam.push(employee);
                    }
                    if (data.addEmployee) {
                        console.log("Above is your team info")
                        console.log("-----------------------")
                        getEmployeeInfo();
                    } 
                    else {
                        console.log("Finish building team");
                        // teamBuilder(data);                   
                    }
                });
        } catch (err) {
            console.log("ERROR!")
            console.log(err);
        }
    }
    
    getManagerInfo();

}
createTeam();

function teamBuilder(data) {
    console.log(data);
    fs.writeFileSync(outputPath, generateTeam(myTeam), "UTF-8");
}


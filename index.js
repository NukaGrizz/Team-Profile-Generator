const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

//Prompt user with questions
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your Managers name? (Required)',
      validate: managerInput => {
        if (managerInput) {
          return true;
        } else {
          console.log('Please enter your Managers name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter your Managers employee ID. (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter your Managers employee ID!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your Managers email.',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your Managers email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Please enter your Managers Office Number.',
      validate: officeNumberInput => {
        if (officeNumberInput) {
          return true;
        } else {
          console.log('Please enter your Managers Office Number!');
          return false;
        }
      }
    }
  ]);
};

// Question asked to user to add employees other than manager
const promptMenu = teamData => {
    if (!teamData.members) {
        teamData.members = [];
      }
      return inquirer
        .prompt([
            {
                type: 'list',
                name: 'employeeType',
                message: 'Would you like to add an employee or complete your team?',
                choices: ['Engineer', 'Intern', 'Done'],
            },
            {
                type: 'input',
                name: 'name',
                message: "What is your Employee's name? (Required)",
                when: (answers) => answers.employeeType != 'Done',
                validate: nameInput => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log("Please enter your Employee's name!");
                    return false;
                  }
                }
              },
              {
                type: 'input',
                name: 'id',
                message: "Enter your Employee's employee ID. (Required)",
                when: (answers) => answers.employeeType != 'Done',
                validate: idInput => {
                  if (idInput) {
                    return true;
                  } else {
                    console.log("Please enter your Employee's employee ID!");
                    return false;
                  }
                }
              },
              {
                type: 'input',
                name: 'email',
                message: "Please enter your Employee's email.",
                when: (answers) => answers.employeeType != 'Done',
                validate: emailInput => {
                  if (emailInput) {
                    return true;
                  } else {
                    console.log("Please enter your Employee's email!");
                    return false;
                  }
                }
              },
              {
                  type: 'input',
                  name: 'gitHub',
                  message: "Please enter your Engineer's GitHub.",
                  when: (answers) => answers.employeeType === 'Engineer',
                validate: gitHubInput => {
                  if (gitHubInput) {
                    return true;
                  } else {
                    console.log("Please enter your Engineer's GitHub!");
                    return false;
                  }
                }
              },
              {
                type: 'input',
                name: 'school',
                message: "Please enter your intern's school.",
                when: (answers) => answers.employeeType === 'Intern',
              validate: schoolInput => {
                if (schoolInput) {
                  return true;
                } else {
                  console.log("Please enter your Intern's school!");
                  return false;
                }
              }
            }
        ])
        .then(memberData => {
                if (memberData.employeeType === 'Done') {
                    console.log(teamData)
                    return teamData;
                } else {
                    teamData.members.push(memberData);
                    return promptMenu(teamData);
                }
            });
};

// application order of execution
promptUser()
  .then(promptMenu)
  .then(teamData => {
      return generatePage(teamData);
  })
  .then(pageHTML => {
      return writeFile(pageHTML);
  }) 
  .then(writeFileResponse => {
   console.log(writeFileResponse);
    return copyFile();
   })
   .then(copyFileResponse => {
     console.log(copyFileResponse);
   })
   .catch(err => {
     console.log(err);
   });
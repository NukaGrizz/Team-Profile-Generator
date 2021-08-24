const Manager = require ('../lib/Manager');
const Engineer = require ('../lib/Engineer');
const Intern = require('../lib/Intern');

// Create the manager card 
const generateManagerCard = (name, id, email, officeNumber) => {
  let manager = new Manager(name, id, email, officeNumber)
  return `
          <article class="card m-4 employeeCard" style="width: 25rem;">
            <h2 class="m-2">${manager.getName()}</h2>
            <h3 class="m-2"><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h3>
            <div class="card-body cardInfo">
                <p class="card-text p-1">ID: ${manager.getId()}</p>
                <p class="card-text p-1">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                <p class="card-text p-1">Office Number: ${manager.officeNumber}</p>
            </div>
          </article>`
};
// Create the employee cards
const generateEmployees = employeesArr => {
  return `
  ${employeesArr
    .filter(({ employeeType }) => employeeType === 'Engineer')
    .map(({ employeeType, name, id, email, gitHub }) => {
      let engineer = new Engineer(name, id, email, gitHub)
      return `
          <article class="card m-4 employeeCard" style="width: 25rem;">
              <h2 class="m-2">${engineer.getName()}</h2>
              <h3 class="m-2"><i class="fas fa-tools"></i> ${engineer.getRole()}</h3>
              <div class="card-body cardInfo">
                  <p class="card-text p-1">ID: ${engineer.getId()}</p>
                  <p class="card-text p-1">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                  <p class="card-text p-1">GitHub: <a href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></p>
              </div>
          </article>
    `;
    })
    .join('')}
    ${employeesArr
      .filter(({ employeeType }) => employeeType === 'Intern')
      .map(({ employeeType, name, id, email, school }) => {
        let intern = new Intern(name, id, email, school)
        return `
          <article class="card m-4 employeeCard" style="width: 25rem;">
              <h2 class="m-2">${intern.getName()}</h2>
              <h3 class="m-2"><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h3>
              <div class="card-body cardInfo">
                  <p class="card-text p-1">ID: ${intern.getId()}</p>
                  <p class="card-text p-1">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                  <p class="card-text p-1">School: ${intern.school}</p>
              </div>
          </article>
    `;
    })
    .join('')}
    `;
  };
//export this template below when this file is called upon
module.exports = templateData => {
    // destructure page data by section
    const { members, name, id, email, officeNumber} = templateData;
  
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team-Portfolio</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
      <link rel="stylesheet" href="./assets/style.css">
    </head>
  
    <body>
      <!--header with title-->
      <header class="container-fluid text-center title">
        <h1 class="p-5">My Team</h1>
      </header>

      <!--main-->
      <main class="container-fluid">

        <!--employee card section-->
        <section class="row justify-content-center">
        ${generateManagerCard(name, id, email, officeNumber)}
        ${generateEmployees(members)}   
        </section>
      </main>
    `;
  };
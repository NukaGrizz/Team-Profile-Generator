// create the manager card 
const generateManagerCard = (name, id, email, officeNumber) => {
  return `
          <article class="card m-4 employeeCard" style="width: 25rem;">
            <h2 class="m-2">${name}</h2>
            <h3 class="m-2">Manager</h3>
            <div class="card-body cardInfo">
                <p class="card-text p-1">ID: ${id}</p>
                <p class="card-text p-1">Email: ${email}</p>
                <p class="card-text p-1">Office Number: ${officeNumber}</p>
            </div>
          </article>`;
};
// create the employee cards
const generateEmployees = employeesArr => {
  return `
  ${employeesArr
    .filter(({ employeeType }) => employeeType === 'Engineer')
    .map(({ employeeType, name, id, email, gitHub }) => {
      return `
          <article class="card m-4 employeeCard" style="width: 25rem;">
              <h2 class="m-2">${name}</h2>
              <h3 class="m-2">${employeeType}</h3>
              <div class="card-body cardInfo">
                  <p class="card-text p-1">ID: ${id}</p>
                  <p class="card-text p-1">Email: ${email}</p>
                  <p class="card-text p-1">GitHub: ${gitHub}</p>
              </div>
          </article>
    `;
    })
    .join('')}
    ${employeesArr
      .filter(({ employeeType }) => employeeType === 'Intern')
      .map(({ employeeType, name, id, email, school }) => {
      return `
          <article class="card m-4 employeeCard" style="width: 25rem;">
              <h2 class="m-2">${name}</h2>
              <h3 class="m-2">${employeeType}</h3>
              <div class="card-body cardInfo">
                  <p class="card-text p-1">ID: ${id}</p>
                  <p class="card-text p-1">Email: ${email}</p>
                  <p class="card-text p-1">School: ${school}</p>
              </div>
          </article>
    `;
    })
    .join('')}
    `;
  };

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
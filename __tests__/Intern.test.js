const Intern  = require('../lib/Intern');
const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');
// test that checks Intern.js working
test('creates a new Intern object', () => {
    const intern = new Intern('Joe', 3, 'Joe@mock.com', 'GrizzSchool')

    expect(intern.name).toBe('Joe');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('Joe@mock.com');
    expect(intern.school).toBe('GrizzSchool');
})

//test that checks Intern getRole() is working
test('creates a new Role for intern', () =>{
    const intern = new Intern()
    expect(intern.getRole()).toBe('Intern');
});
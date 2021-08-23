const Intern  = require('../lib/Intern');
const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');

test('creates a new Intern object', () => {
    const intern = new Intern('Joe', 3, 'Joe@mock.com', 'GrizzSchool')

    expect(intern.name).toBe('Joe');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('Joe@mock.com');
    expect(intern.school).toBe('GrizzSchool');
})

test('creates a new Role for enginer', () =>{
    const intern = new Intern()
    expect(intern.getRole()).toBe('Intern');
});
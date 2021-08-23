const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');

test('creates a new Manager object', () => {
    const manager = new Manager('Joe', 1, 'Joe@mock.com', 123)

    expect(manager.name).toBe('Joe');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('Joe@mock.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));

})

test('creates a new Role for enginer', () =>{
    const manager = new Manager()
    expect(manager.getRole()).toBe('Manager');
});
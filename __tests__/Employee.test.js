const Employee = require('../lib/Employee');

test('creates a new Employee object', () => {
    const employee = new Employee('Joe', 1, 'Joe@mock.com')

    expect(employee.name).toBe('Joe');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('Joe@mock.com');

})
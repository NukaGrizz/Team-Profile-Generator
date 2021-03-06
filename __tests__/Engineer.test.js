const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');
// test that checks Engineer.js working
test('creates a new Engieer object', () => {
    const engineer = new Engineer('Joe', 2, 'Joe@mock.com', 'nukaGrizz')

    expect(engineer.name).toBe('Joe');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('Joe@mock.com');
    expect(engineer.gitHub).toBe('nukaGrizz');
    
});
//test that checks Engineer getRole() is working
test('creates a new Role for engineer', () =>{
    const engineer = new Engineer()
    expect(engineer.getRole()).toBe('Engineer');
});

const Intern  = require('../lib/Intern');

test('creates a new Intern object', () => {
    const intern = new Intern('Joe', 3, 'Joe@mock.com', 'GrizzSchool')

    expect(intern.name).toBe('Joe');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('Joe@mock.com');
    expect(intern.school).toBe('GrizzSchool');
    expect(intern.getRole()).toBe('Intern');

})
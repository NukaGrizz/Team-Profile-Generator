const Engineer = require('../lib/Engineer');

test('creates a new Engieer object', () => {
    const engineer = new Engineer('Joe', 2, 'Joe@mock.com', 'nukaGrizz')

    expect(engineer.name).toBe('Joe');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('Joe@mock.com');
    expect(engineer.gitHub).toBe('nukaGrizz');
    expect(engineer.getRole()).toBe('Engineer');

})
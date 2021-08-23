const Engineer = require('../lib/Engineer');

test('creates a new Engieer object', () => {
    const manager = new Engineer('Joe', 2, 'Joe@mock.com', 'nukaGrizz')

    expect(manager.name).toBe('Joe');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('Joe@mock.com');
    expect(manager.gitHub).toBe('nukaGrizz');
    expect(manager.getRole()).toBe('Engineer');

})
const Manager = require('../lib/Manager');

test('creates a new Manager object', () => {
    const manager = new Manager('Joe', 1, 'Joe@mock.com', 123)

    expect(manager.name).toBe('Joe');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('Joe@mock.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.getRole()).toBe('Manager');

})
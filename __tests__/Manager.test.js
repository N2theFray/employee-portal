const Manager = require('../lib/manager')

test('ensure correct inputs happen', () => {
    const manager = new Manager('Steve', 12345, 'blacksteven1@gmail.com')

    expect(manager.name).toEqual(expect.any(String))
})

test('getName works', () =>{
    const manager = new Manager('Steve', 12345, 'blacksteven1@gmail.com')

    expect(manager.name).toEqual(expect.any(String))
})

test('getId works', () => {
    const manager = new Manager('Steve', 12345, 'blacksteven1@gmail.com')

    expect(manager.id).toEqual(expect.any(Number))
})

test('getEmail works', () => {
    const manager = new Manager('Steve', 12345, 'blacksteven1@gmail.com')

    expect(manager.email).toEqual(expect.any(String))
})

test('getRole works', () => {
    const manager = new Manager('Steve', 12345, 'blacksteven1@gmail.com')

    expect(manager.getRole()).toBe('Manager')
})
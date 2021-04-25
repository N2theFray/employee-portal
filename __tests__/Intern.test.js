const Intern = require('../lib/Intern')

test('ensure correct inputs happen', () => {
    const intern = new Intern('Steve', 12345, 'blacksteven1@gmail.com')

    expect(intern.name).toEqual(expect.any(String))
})

test('getName works', () =>{
    const intern = new Intern('Steve', 12345, 'blacksteven1@gmail.com')

    expect(intern.name).toEqual(expect.any(String))
})

test('getId works', () => {
    const intern = new Intern('Steve', 12345, 'blacksteven1@gmail.com')

    expect(intern.id).toEqual(expect.any(Number))
})

test('getEmail works', () => {
    const intern = new Intern('Steve', 12345, 'blacksteven1@gmail.com')

    expect(intern.email).toEqual(expect.any(String))
})

test('getRole works', () => {
    const intern = new Intern('Steve', 12345, 'blacksteven1@gmail.com')

    expect(intern.getRole()).toBe('Intern')
})
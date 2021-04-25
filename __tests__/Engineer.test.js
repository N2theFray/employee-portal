const Engineer = require('../lib/Engineer')

test('ensure correct inputs happen', () => {
    const engineer = new Engineer('Steve', 12345, 'blacksteven1@gmail.com')

    expect(engineer.name).toEqual(expect.any(String))
})

test('getName works', () =>{
    const engineer = new Engineer('Steve', 12345, 'blacksteven1@gmail.com')

    expect(engineer.name).toEqual(expect.any(String))
})

test('getId works', () => {
    const engineer = new Engineer('Steve', 12345, 'blacksteven1@gmail.com')

    expect(engineer.id).toEqual(expect.any(Number))
})

test('getEmail works', () => {
    const engineer = new Engineer('Steve', 12345, 'blacksteven1@gmail.com')

    expect(engineer.email).toEqual(expect.any(String))
})

test('getRole works', () => {
    const engineer = new Engineer('Steve', 12345, 'blacksteven1@gmail.com')

    expect(engineer.getRole()).toBe('Engineer')
})
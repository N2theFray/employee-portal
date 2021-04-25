
const Employee = require('../lib/Employee')

test('ensure correct inputs happen', () => {
    const employee = new Employee('Steve', 12345, 'blacksteven1@gmail.com')

    expect(employee.name).toEqual(expect.any(String))
})

test('getName works', () =>{
    const employee = new Employee('Steve', 12345, 'blacksteven1@gmail.com')

    expect(employee.name).toEqual(expect.any(String))
})

test('getId works', () => {
    const employee = new Employee('Steve', 12345, 'blacksteven1@gmail.com')

    expect(employee.id).toEqual(expect.any(Number))
})

test('getEmail works', () => {
    const employee = new Employee('Steve', 12345, 'blacksteven1@gmail.com')

    expect(employee.email).toEqual(expect.any(String))
})

test('getRole works', () => {
    const employee = new Employee('Steve', 12345, 'blacksteven1@gmail.com')

    expect(employee.getRole()).toBe('Employee')
})
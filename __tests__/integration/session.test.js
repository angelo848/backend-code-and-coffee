const User = require('../../src/app/models/User')

describe('Authentication', () => {
  it('should sum two numbers', async () => {
    const user = await User.create({
      name: 'Angelo',
      user_name: 'angelo848',
      email: 'angelo_848@live.com',
      password: '123456'
    })

    expect(user.email).toBe('angelo_848@live.com')
  })
})

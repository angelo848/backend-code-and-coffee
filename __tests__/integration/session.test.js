const User = require('../../src/app/models/User')

describe('Authentication', () => {
  it('should sum two numbers', async () => {
    const user = await User.create({
      name: 'Angelo',
      user_name: 'angelo848',
      email: 'angelo.salles@dcomp.ufs.br',
      password: '123456'
    })
    console.log(user)

    expect(user.email).toBe('angelo.salles@dcomp.ufs.br')
  })
})

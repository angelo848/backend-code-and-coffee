const jwt = require('jsonwebtoken')

const secret = 'GQDstcKsx0NHjPOuXOYg5MbeJ1XT0uFiwDVvVBrk'

const sign = payload => jwt.sign(payload, secret, {
    expiresIn: '2h'
})

const verify = token => jwt.verify(token, secret)

module.exports = { sign, verify }
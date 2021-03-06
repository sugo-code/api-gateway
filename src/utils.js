const got = require('got')
const jwt = require('jsonwebtoken')

const stripPrefix = (str, prefix) => {
    return str.replace(prefix, '')
}

const getJwtData = (header) => {
    const token = header.split(' ')[1]
    return jwt.decode(token)
}

const verifyJwt = async (header) => {
    const result = await got('verify', {prefixUrl: process.env.AUTH_API_URL, headers: {authorization: header}})
    return result
}

const protectedRouteValidator = {
    headers: {
        type: 'object',
        properties: {
            'authorization': { type: 'string' }
        },
        required: ['authorization']
    }
}

module.exports = {
    stripPrefix,
    getJwtData,
    verifyJwt,
    protectedRouteValidator
}

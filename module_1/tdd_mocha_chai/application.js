const { username, password } = require('./user-module')

// Create a user
const testUser = {
    name: username(),
    password: password(8)
}

console.log(testUser)
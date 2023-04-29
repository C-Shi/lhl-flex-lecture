function password(length) {
    const lib = "0123456789qwertyuiopasdfghjklzxcvbnm,./;[]\=-!@#$%^&*()";
    let pass = "";
    for (let i = 0; i < length; i++) {
        pass += lib[Math.floor(Math.random() * lib.length)];
    }
    return pass;
}

function username() {
    const lib = ['John', 'Bob', 'Alex', 'James', 'Olivia', 'Lucas']
    return lib[Math.floor(Math.random() * lib.length)]
}

module.exports = {
    username: username,
    password: password
}
function math (x, y, action) {
    result = action(x, y)
    console.log(`result is ${result}`)
}

math(10, 15, (x, y) => { 
    return x * y
})
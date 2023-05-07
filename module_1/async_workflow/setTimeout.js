// setTimeout is function to schedule another function to be run in a future time when timer expires
setTimeout(function() {
    console.log('After approx 3 seconds')
}, 3000)

// setTimeout do not pause the code execution. It schedule a future execution seperately from main stack
setTimeout(function() {
    console.log('Future Execution')
}, 1000)
console.log('Other Execution')

// timer is not a guarantee time delay, but a minimum time delay
for (let i = 0; i < 4000000000; i++) {}
setTimeout(function() {
    console.log('See you after at least 1 second')
}, 1000)
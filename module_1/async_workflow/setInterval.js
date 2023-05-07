// setInterval repeatly executes a callback with an interval
setInterval(() => {
    console.log('See you in one second')
}, 1000)


// setInterval returns an interval that can be cleared
let count = 0
let interval = setInterval(() => {
    console.log('See you 5 times');
    count++;
    if (count > 5) {
        clearInterval(interval);
    }
}, 1000)
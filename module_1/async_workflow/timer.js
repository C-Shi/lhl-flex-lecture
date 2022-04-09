let x = 1;
console.log(`x before setTimout: ${x}`)
setTimeout(() => {
 console.log(`x inside setTimout: ${x}`)
}, 2000);
console.log(`x after setTimout: ${x}`)

setInterval(() => {
  console.log('Nice to see you again');
 }, 3000)

setTimeout(() => { console.log('see you in 3 second') }, 3000)
for (let i = 0; i < 6000000000; i++) {}

setTimeout(() => {
  console.log('after 1 second');
  setTimeout(() => {
    console.log('after 2 second')
  }, 1000)
 }, 1000)

 // 5 second count down
let x = 5;
const interval = setInterval(() => {
 console.log(x)
 x--;
 (x < 0) && clearInterval(interval)
}, 1000)

console.log('First');
setTimeout(() => {
 console.log('Second')
}, 0);
console.log('Third');

// First
// Third
// Second
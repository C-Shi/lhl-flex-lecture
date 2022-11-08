// Give the print out sequence

console.log('A')
for (let i = 0; i < 1000000000; i++) {}
console.log('B')

setTimeout(() => {
  console.log('C');
  setTimeout(() => {
    console.log('D');
  }, 999); 

  setTimeout(() => {
    console.log('E')
  }, 2000)
}, 0)

setTimeout(() => {
  console.log('F')
}, 1000)

console.log('G')

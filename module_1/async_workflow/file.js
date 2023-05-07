const fs = require('fs');

// Read File content
fs.readFile('./file.txt', 'utf-8' ,(err, data) => {
  console.log('Reading the file...');
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

// Write to File
fs.writeFile('./file.txt', 'Write something to file', (err) => {
  console.log('Finish Writing')
})

// Amend File -> Nested Async
fs.readFile('./file.txt', 'utf-8' ,(err, data) => {
  let content = data + 'Write something to file'
  fs.writeFile('./file.txt', content, (err) => {
    console.log('Finish Writing')
  })
})
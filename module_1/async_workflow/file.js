const fs = require('fs');

fs.readFile('./file.txt', 'utf-8' ,(err, data) => {
  console.log('Reading the file...');
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

fs.writeFile('./file.txt', 'Write something to file', (err) => {
  console.log('Finish Writing')
})
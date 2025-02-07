```javascript
const fs = require('fs');

function processFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    // Process the data here...
    console.log('File processed successfully.');
  });
  console.log('File processing started...');
}

processFile('./myFile.txt');
```
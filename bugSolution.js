```javascript
const fs = require('fs').promises;

async function processFile(filePath) {
  console.log('File processing started...');
  try {
    const data = await fs.readFile(filePath, 'utf8');
    // Process the data here...
    console.log('File processed successfully.');
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

processFile('./myFile.txt');
```
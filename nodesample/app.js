const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello Pintu NodeJS Service!!');
});

app.listen(port, () => {
  console.log(`Node.js Service listening at http://localhost:${port}`);
});


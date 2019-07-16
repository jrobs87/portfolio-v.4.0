const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const path = require('path')
app.use(express.static('public'))

app.get('/', (req, res) => {
  console.log(`'/' route hit`);
  res.sendFile(path.join(__dirname + '/index.html'))
});

app.listen(port, () => {
  console.clear();
  console.log(`Example app listening on port ${port}!`)
})

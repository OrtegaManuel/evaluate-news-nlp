const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const fetch = require('node-fetch');
const apiKey = process.env.API_KEY;
// const inputURL = document.getElementById('url').value;

console.log(`Your API key is ${process.env.API_KEY}`);

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

// Dependencies
// Not using body-parser as it is deprecated

/* Middleware*/
// body-parser is already part of express in the newer express versions
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// console.log(__dirname);

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
  // res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});

app.post('/api', async function (req, res) {
  const userText = req.body.userText;
  ///////
  const data = await getApiURL(apiKey, userText);
  res.json(data);
});

async function getApiURL(apiKey, userText) {
  const apiURL = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&of=json&txt=${userText}&lang=en`;

  const res = await fetch(apiURL);
  const data = await res.json();
  console.log(data.sentence_list[0].agreement);

  return {
    agreement: data.sentence_list[0].agreement,
  };
}

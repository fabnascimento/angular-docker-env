const express = require('express');
const fallback = require('express-history-api-fallback')
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const root = path.join(__dirname, 'dist/angular-docker-env');
const port = (process.env.PORT || 8080);

// Initializing express server.
const app = express()
  .use(cors({
    origin: true,
    methods: ['GET', 'POST'],
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept'
  }))
  .use(express.static(root))
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use(bodyParser.json())
  .use(helmet());

app.use(fallback('index.html', { root }));

app.listen(port, '0.0.0.0', () => console.log(`Listening on port ${port}`));

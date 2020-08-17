const express = require('express');
const app = express();
const port = process.env.PORT || 8081;
const path = require('path');

//External Dependencies
const methodOverride = require('method-override');
const cors = require('cors');
//Allows global access to variables in our .env file
require('dotenv').config({
  path: path.join(__dirname, '../../utils/enviroment/.env')
});

module.exports = () => {
  app.set('port', port);

  //Serve a static build folder of client
  app.use(express.static(path.join(__dirname, '../../../client/build')));

  //Server index.html for any non api routes
  // app.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../../../client/build/index.html'));
  // });

  //Middlewares
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(methodOverride('_method'));
  app.use(cors());
  return app;
};

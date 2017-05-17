var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));

// Routes =============================================================

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});



import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';
// import logo from './logo.svg';
import './App.css';
import AppBarExampleIcon from './nav-bar'
import CardExampleWithAvatar from './course-item'
import BottomNavigationExampleSimple from './bottom-nav'
import AutoCompleteExampleSimple from './search-bar'
import Logo from './logo.js'
import LandingPage from './LandingPage'
import LogIn from './LogIn';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
        <LandingPage />
        <div>
            <AppBarExampleIcon />
            <LogIn />
        </div>
          <Logo />
          <AutoCompleteExampleSimple />
          <CardExampleWithAvatar />
          <CardExampleWithAvatar />
          <CardExampleWithAvatar />
          <BottomNavigationExampleSimple />
        </div>
      </MuiThemeProvider>
    );
  }
}



export default App;

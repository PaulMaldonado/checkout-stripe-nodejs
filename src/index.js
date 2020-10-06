const express = require("express");
const router = require("./routes/buy.router");
const ejs = require("ejs");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Static files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// Routes
app.use(router);

// Server
app.listen(PORT, () => 
console.log(`Server running on port: http://localhost:${PORT}`));
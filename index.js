const express = require("express");
const app = express();
const path = require("path");

const port = 8080;
app.set("view engine","ejs");
app.set("views",path.join(__dirname, "/views"))
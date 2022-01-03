const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname + "/public"));

//routes
app.use(require("./routes/index"));

app.listen(3000, () => console.log("Server ON"));

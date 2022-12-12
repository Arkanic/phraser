const express = require("express");

const app = express();

app.use(express.static("phraser"));

app.listen("8080", () => {
    console.log("Dev server started");
});
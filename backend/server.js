const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
    res.send("Its mee");
});

app.get("/api/notes", (req, res) => {
    res.json(notes);
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, console.log(`hello from server ${PORT}`));
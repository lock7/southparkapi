const express = require("express");
const fs = require("fs");

const bodyParser = require("body-parser");
const library = require("./library.js");

const PORT = 4000;
const app = express();

app.use((req, res, next) => {
  console.log(`This time is ${Date.now()}`);
  next();
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello, welcome to SouthPark API!" });
});

app.get("/characterinfo", (req, res) => {
  //const characters = req.query;
  let all = library.getAllCharacters();
  console.log(all);
  res.json({ all });
});

app.get("/name/:characterName", (req, res) => {
  const characterName = req.params.characterName;
  let character = library.getCharacterName(characterName);
  console.log(character);
  res.json({ character });
});
app.get("/gender/:characterName", (req, res) => {
  const characterName = req.params.characterName;
  let gender = library.getCharacterGender(characterName);
  console.log(gender);
  res.json({ gender });
});

app.get("/age/:characterName", (req, res) => {
  const age = req.params.characterName;
  let characterAge = library.getCharacterAge(age);
  res.json({ characterAge });
});

app.get("/haircolor/:characterName", (req, res) => {
  const name = req.params.characterName;
  let hair = library.getCharacterHair(name);
  res.json({ hair });
});

app.get("/occupation/:characterName", (req, res) => {
  const name = req.params.characterName;
  let characterOccupation = library.getCharacterOccupation(name);
  res.json({ characterOccupation });
});

app.get("/grade/:characterName", (req, res) => {
  const name = req.params.characterName;
  let characterGrade = library.getCharacterGrade(name);
  res.json({ characterGrade });
});

app.get("/image/:characterName", (req, res) => {
  const name = req.params.characterName;
  let characterImage = library.getCharacterImage(name);
  res.json({ characterImage });
});

app.listen(PORT, () => {
  console.log(`I'm listening on Port ${PORT}`);
});

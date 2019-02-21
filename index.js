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

app.get("/characternameinfo/:hairColor", (req, res) => {
  const hairColor = req.params.hairColor;
  let hair = library.getCharacterHair(hair);
  res.json({ hair });
});

app.get("/characternameinfo/:occupation", (req, res) => {
  const occupation = req.params.occupation;
  let characterOccupation = library.getCharacterOccupation(occupation);
  res.json({ characterOccupation });
});

app.get("/characternameinfo/:grade", (req, res) => {
  const grade = req.params.grade;
  let characterGrade = library.getCharacterGrade(grade);
  res.json({ getCharacterGrade });
});

app.get("/characternameinfo/:image", (req, res) => {
  const imageName = req.params.image;
  let characterImage = library.getCharacterImage(imageName);
  res.json({ characterImage });
});

app.listen(PORT, () => {
  console.log(`I'm listening on Port ${PORT}`);
});

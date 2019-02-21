const characters = {
  Stan: {
    Name: "Stanley Marsh",
    Gender: "Male",
    Age: 10,
    HairColor: "Black",
    Occupation: "Student",
    Grade: "4th Grade",
    Image:
      "http://southparkstudios.mtvnimages.com/shared/characters/kids/stan-marsh.png"
  },
  Kyle: {
    Name: "Kyle Broflovski",
    Gender: "Male",
    Age: 10,
    HairColor: "red/aubrn",
    Occupation: "Student",
    Grade: "4th Grade",
    Image:
      "http://southparkstudios.mtvnimages.com/shared/characters/kids/kyle-broflovski.png"
  },
  Cartman: {
    Name: "Eric Cartman",
    Gender: "Male",
    Age: 10,
    HairColor: "Brown",
    Occupation: "Student",
    Grade: "4th Grade",
    Image:
      "http://southparkstudios.mtvnimages.com/shared/characters/kids/eric-cartman.png"
  },
  Kenny: {
    Name: "Kenneth McCormick",
    Gender: "Male",
    Age: 10,
    HairColor: "Blonde",
    Occupation: "Student",
    Grade: "4th Grade",
    Image:
      "http://southparkstudios.mtvnimages.com/shared/characters/kids/kenny-mccormick.png"
  },
  Chef: {
    Name: "Jerome McElroy",
    Gender: "Male",
    HairColor: "Black",
    Occupation: "Chef",
    Image:
      "http://southparkstudios.mtvnimages.com/shared/characters/adults/chef.png"
  },
  MrHankey: {
    Name: "Mr. Hankey, the Christmas Poo",
    Gender: "Male",
    HairColor: "Black",
    Occupation:
      "Christmas Spirit and Mascot; Director of the Annual Christmas Pageant",
    Image:
      "https://vignette.wikia.nocookie.net/scratchpad/images/a/a1/Mr_Hankey_transparent.png/revision/latest?cb=20180617125412"
  }
};

const allCharacters = characters => {
  return characters;
};
const getCharacterName = name => {
  return characters[name].Name;
};
const getCharacterGender = name => {
  return characters[name].Gender;
};
const getCharacterAge = name => {
  return characters[name].Age;
};
const getCharacterHair = name => {
  return characters[name].HairColor;
};
const getCharacterOccupation = name => {
  return characters[name].Occupation;
};
const getCharacterGrade = name => {
  return characters[name].Grade;
};
const getCharacterImage = name => {
  return characters[name].Image;
};

module.exports = {
  allCharacters: allCharacters,
  getCharacterName: getCharacterName,
  getCharacterGender: getCharacterGender,
  getCharacterAge: getCharacterAge,
  getcharacterHair: getCharacterHair,
  getCharacterOccupation: getCharacterOccupation,
  getCharacterGrade: getCharacterGrade,
  getCharacterImage: getCharacterImage
};

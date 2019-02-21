const characters = {
  Stan: {
    name: "Stanley Marsh",
    gender: "Male",
    age: 10,
    hairColor: "Black",
    occupation: "Student",
    grade: "4th Grade",
    image:
      "http://southparkstudios.mtvnimages.com/shared/characters/kids/stan-marsh.png"
  },
  Kyle: {
    name: "Kyle Broflovski",
    gender: "Male",
    age: 10,
    hairColor: "red/aubrn",
    occupation: "Student",
    grade: "4th Grade",
    image:
      "http://southparkstudios.mtvnimages.com/shared/characters/kids/kyle-broflovski.png"
  },
  Cartman: {
    name: "Eric Cartman",
    gender: "Male",
    age: 10,
    hairColor: "Brown",
    occupation: "Student",
    grade: "4th Grade",
    image:
      "http://southparkstudios.mtvnimages.com/shared/characters/kids/eric-cartman.png"
  },
  Kenny: {
    name: "Kenneth McCormick",
    gender: "Male",
    age: 10,
    hairColor: "Blonde",
    occupation: "Student",
    grade: "4th Grade",
    image:
      "http://southparkstudios.mtvnimages.com/shared/characters/kids/kenny-mccormick.png"
  },
  Chef: {
    name: "Jerome McElroy",
    gender: "Male",
    hairColor: "Black",
    occupation: "Chef",
    image:
      "http://southparkstudios.mtvnimages.com/shared/characters/adults/chef.png"
  },
  MrHankey: {
    name: "Mr. Hankey, the Christmas Poo",
    gender: "Male",
    hairColor: "Black",
    occupation:
      "Christmas Spirit and Mascot; Director of the Annual Christmas Pageant",
    image:
      "https://vignette.wikia.nocookie.net/scratchpad/images/a/a1/Mr_Hankey_transparent.png/revision/latest?cb=20180617125412"
  },
  Towelie: {
    name: "Towelie",
    age: "17 towel years",
    gender: "Male",
    occupation: "Resident high towel",
    image:
      "http://southparkstudios.mtvnimages.com/shared/characters/non-human/towelie.png"
  },
  Jimmy: {
    name: "Jimmy Valmer",
    gender: "Male",
    age: 10,
    hairColor: "Black",
    occupation: "Student, Comedian, Journalist, Ad Blocker",
    grade: "4th Grade",
    image:
      "http://southparkstudios.mtvnimages.com/shared/characters/kids/jimmy-valmer.png"
  },
  Butters: {
    name: "Leopold Butters Scotch",
    gender: "Male",
    age: 10,
    hairColor: "Blonde",
    occupation: "Student",
    grade: "4th Grade",
    image:
      "http://southparkstudios.mtvnimages.com/shared/characters/kids/butters-stotch.png"
  }
};

const allCharacters = () => {
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
  getCharacterHair: getCharacterHair,
  getCharacterOccupation: getCharacterOccupation,
  getCharacterGrade: getCharacterGrade,
  getCharacterImage: getCharacterImage
};

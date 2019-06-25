const moduleStuff = require('./anime.module');
const characterList = moduleStuff.characters;


// I wanna call the sayHello function from the moduleStuff
// but it is exported as 'hello' in the object
moduleStuff.hello('Playfair');

// For loop to go through the array and write to the console
// something like "Spike is from Cowboy Bebop".


// template literal OR string concatenation
for (character of characterList){
    console.log(`${character.name} is from ${character.show}`);
    console.log(character.name + '  is from ' + character.show);
}

// node index.js prints to terminal

// npm init y (makes (initializes)node pkg, creates package.json)
// npm install (package name)
// node (js file name)
// npm start (runs "start" script in package.json)
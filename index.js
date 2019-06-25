const characters = [
    {
    name: "Spike",
    show: "Cowboy Bebop",
    },
    {
        name: "L",
        show: "Death Note"
    },
    {
        name: "Goku",
        show: "Dragonball Z"
    },
    {
        name: "Gon",
        show: "Hunter X Hunter"
    }
]


// For loop to go through the array and write to the console
// something like "Spike is from Cowboy Bebop".


// template literal OR string concatenation
for (character of characters){
    console.log(`${character.name} is from ${character.show}`);
}

// node index.js prints to terminal

// npm init y (makes (initializes)node pkg, creates package.json)
// npm install (package name)
// node (js file name)
// npm start (runs "start" script in package.json)
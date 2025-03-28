const dogs = [
  { name: "Snickers", age: 2 },
  { name: "Hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
console.log("Hello I am a %s string!", "💩"); //hello I am a 💩 string!

// Styled
console.log(
  "%c I am some great text",
  "font-size:50px; background:red; text-shadow: 10px 10px 0 blue"
);

// warning!
console.warn("OH NOOO");

// Error :|
console.error("Shit!");

// Info
console.info("Crocodiles eat 3-4 people per year");

// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wrong!");

// clearing
//console.clear();

// Viewing DOM Elements
console.log(p); //<p onclick="makeGreen()">×BREAK×DOWN×</p>
console.dir(p); //show all properties

// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age * 2} years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("Wes");
console.count("Wes");
console.count("Baljan");
console.count("Baljan");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

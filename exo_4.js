const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Quels entrepreneurs sont nés dans les années 70 ?")

// function isSeventies(value) {
//   return value >= 1970 && value < 1980;
// }

// var seventies = entrepreneurs.filter(isSeventies);

// console.log(entrepreneurs)

console.log("Quels sont les noms et prénoms des entrepreneurs dans la liste ?");

let entrepreneursName = []

for(let index in entrepreneurs) {
  entrepreneursName.push(entrepreneurs[index].last + " " + entrepreneurs[index].first)
};

console.log(entrepreneursName)

console.log("Quel âge aurait-ils cette année ?");
for(let index in entrepreneurs) {
  console.log(`${entrepreneurs[index].first} ${entrepreneurs[index].last} aurait ${2019 - entrepreneurs[index].year} ans aujourd'hui.`)
};

console.log("Maintenant on va les trier par ordre alphabétique")

let sortedName = []

for(let index in entrepreneurs) {
  sortedName.push(entrepreneurs[index].last);}

console.log(sortedName.sort());
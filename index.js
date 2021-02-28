// Code your solution here

const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

//This function takes an array of drivers' names and a `string`
// as arguments, and returns the matching list of drivers. The function should be
// case insensitive.

function findMatching(drivers, x) {
  let newNameList = drivers.filter(name => name.toLowerCase() === x.toLowerCase());
  return newNameList;
};



//This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(drivers, x) {
  let newNameList = drivers.filter(name => name.slice(0,2) === x.slice(0,2));
  return newNameList;
};


// This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.

function matchName(drivers, x) {
  let newNameList = drivers.filter(names => names.name === x);
  return newNameList;
};
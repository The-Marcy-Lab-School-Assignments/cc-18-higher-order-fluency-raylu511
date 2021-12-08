//write your code here
const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin'];
const numbers = [22, 15, 1114, 416, 37, 4]

const shortWords = array => array.filter(animal => animal.length < 5);

const noVowel = array => array.map(animal => animal.replace(/[aeiou]/gi, 'x'));

const longToShort = array => array.sort((a,b) => b.length - a.length);

const onlyVowelA = array => array.filter(animal => animal.includes('a'));

const pluralize = array => array.map(animal => animal + 's');

const longerThanSeven = array => array.some(animal => animal.length > 7);

const oddLength = array => array.filter(animal => animal.length % 2 === 1);

const allFour = array => array.every(animal => animal.length === 4);

const sum = array => array.reduce((prev, curr) => prev + curr);

const longWords = array => array.filter(animal => animal.length > 3);

const uppercase = array => array.map(animal => animal[0].toUpperCase() + animal.substring(1));

const concatStrings = array => array.join(' ');

console.log(shortWords(animals))        // ['dog', 'cat', 'bear']
console.log(noVowel(animals))           // ['chxxtxh', 'dxg', 'cxt', 'dxdxbxrd', 'bxxr','dxlphxn']
console.log(longToShort(animals))       // [‘dodobird’, ‘cheetah’, ‘dolphin’, ‘bear’, ‘dog’, ‘cat’]
console.log(onlyVowelA(animals))        // ['cheetah', 'cat','bear']
console.log(pluralize(animals))         // [ 'dodobirds', 'cheetahs', 'dolphins', 'bears', 'dogs', 'cats' ]
console.log(longerThanSeven(animals))   // true
console.log(oddLength(animals))         // ['cheetah','dog', 'cat', 'dolphin']
console.log(allFour(animals))           // false
console.log(sum(numbers))               // 1608
console.log(longWords(animals))         // [ 'dodobird', 'cheetah', 'dolphin', 'bear' ]
console.log(uppercase(animals))         // [ 'Dodobird', 'Cheetah', 'Dolphin', 'Bear', 'Dog', 'Cat' ]
console.log(concatStrings(animals))     // dodobird cheetah dolphin bear dog cat
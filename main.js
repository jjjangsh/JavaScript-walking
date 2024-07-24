// 문제 1
const greeting = "Hello";
const name = "World";

console.log(greeting + ' ' +name) // "Hello World" 출럭

// 문제 2
const lion = {
  name : "심바",
  age : 3,
  isHero : true,
  text : "하쿠나마타타"
}

console.log(lion.text);

//문제 3
const sentence = "Learning JavaScript is fun!";

const newSentence = sentence.replace("JavaScript", "Coding");

console.log(newSentence); // "Learning Coding is fun!" 출력

//문제 4
function incrementAge(lion) {
  return lion.age++;
}

function addLeg(lion) {
  const newLion = {...lion, legCnt : 4};
  return newLion;
}

incrementAge(lion);
console.log(incrementAge(lion));

addLeg(lion);
console.log(addLeg(lion));

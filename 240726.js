// 문제 1
function printFruits(a, b) {
	return "제가 좋아하는 과일은 " + a + "," + b + "입니다."
}

console.log(printFruits("사과", "오렌지"));

// 문제 2
function checkAge(age) {
  if(age >= 19) {
    console.log("안녕하세요");
  } else {
    console.log("나가세요");
  }
}

checkAge(30);

// 문제 3
function repeatWord(str, n) {
  for(let i = 1; i <= n; i++) {
    console.log(str);
  }
}

repeatWord("hello", 5);

// 문제 4
const members = [
  {
    name: "최원장",
    role: "tutor",
  },
  {
    name: "윤창식",
    role: "tutor",
  },
  {
    name: "김병연",
    role: "tutor",
  },
  {
    name: "박가현",
    role: "tutor",
  },
  {
    name: "김멍멍",
    role: "student",
  },
  {
    name: "이야옹",
    role: "student",
  },
];

function getStudents(members) {
  for(let i = 0; i < members.length; i++) {
    if(members[i].role === "tutor") {
      console.log(members[i].name);
    }
  }
}

getStudents(members);

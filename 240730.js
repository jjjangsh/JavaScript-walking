// 문제1
let shoppingList = ['우유', '계란', '아이스크림', '목살'];

shoppingList.pop();
shoppingList.push("삼겹살");

console.log(shoppingList);
// 출력 : [ '우유', '계란', '아이스크림', '삼겹살' ]


// 문제 2
let tutorNames = ['최원장', '김르탄', '윤창식', '박가현', '김병연', '내배캠'];

tutorNames.forEach((tutor) => {
  if(tutor === '최원장' || tutor === '윤창식' || tutor === '박가현' || tutor === '김병연')
    console.log(tutor);
})

// 문제 3
let tutors = [
  {
    name: '최원장',
    time: '9to6',
  },
  {
    name: '윤창식',
    time: '9to6',
  },
  {
    name: '박가현',
    time: '9to6',
  },
  {
    name: '김병연',
    time: '9to6',
  },
];

const newTutors = tutors.map((tutor) => {
  return {
    name: tutor.name,
    time: tutor.time,
    isMentoring: true
  }
})

console.log(newTutors);

// 문제 4
let starbucks = [
  {
    name: '카페 라떼',
    icedOnly: false,
  },
  {
    name: '콜드 브루',
    icedOnly: true,
  },
  {
    name: '돌체 라떼',
    icedOnly: false,
  },
  {
    name: '돌체 콜드 브루',
    icedOnly: true,
  },
];

const icedOnly = starbucks.filter((drink) => {
  return drink.icedOnly === true;
})

console.log(icedOnly);


function sortArray(arr) {
  // 여기에 sort를 사용하여 작성하세요
  const result = arr.sort(function (인자1, 인자2) {
    return 인자2 - 인자1;
  });
  return result;
}
function sortArray2(arr) {
  // 여기에 sort를 사용하여 작성하세요
  const result = arr.sort(function (인자1, 인자2) {
    return 인자1.localeCompare(인자2);
  });
  return result;
}

// 예시 출력
console.log(sortArray([3, 1, 4, 1, 5, 9])); // 출력: [1, 1, 3, 4, 5, 9]
console.log(sortArray2(["바나나", "사과", "포도"])); // 출력: ['바나나', '사과', '포도']
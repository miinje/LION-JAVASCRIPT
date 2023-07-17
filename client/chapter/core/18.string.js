/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'less is more.';


// length 프로퍼티
let stringTotalLength = message.length;


// 특정 인덱스의 글자 추출
let extractCharacter = message[0];


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// 부분 문자열 추출
let slice = message.slice(1,3);
let subString = message.substring(1.3);
let subStr = message.substr(1,3);  //잘 쓰지 않음


// 문자열 포함 여부 확인
let indexOf = message.indexOf('u'); //앞에서부터 찾고, 앞에서부터 인덱스 반환
let lastIndexOf = message.lastIndexOf('m'); //뒤에서 찾고, 앞에서부터 인덱스 반환
let includes = message.includes('Less');
let startsWith = message.startsWith('Less'); //시작점
let endsWith = message.endsWith('more');


// 공백 잘라내기
let trimLeft = message.trimLeft();  //trimStart로 대체
let trimRight = message.trimRight();  //trimEnd로 대체
let trim = message.trim(); //양쪽 공백만 제거, 문자 내에서의 공백은 제거해 주지 않음


// 텍스트 반복
let repeat = message.repeat(3);


// 대소문자 변환
let toLowerCase = message.toLowerCase();
let toUpperCase = message.toUpperCase();


// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
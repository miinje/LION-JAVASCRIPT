/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */


// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

const a = '10';
const b = '30';


// 단항 연산자
let unary = +a;

// 이항 연산자
let binary = a+b;

// 삼항 연산자
// let ternary = a===10?true:false; a가 10과 동일하면 true로, 동일하지 않으면 false로 반환
let ternary = Math.random()> 0.5 ? 'big' : 'small';
// console.log(ternary);

// 산술 연산자: 덧셈
let addition = 1+2;

// 산술 연산자: 뺄셈
let subtraction = 10-2;

// 산술 연산자: 곱셈
let multiplication = 30*2;

// 산술 연산자: 나눗셈
let division = 14/2;

// 산술 연산자: 나머지
let remainder = 10%3;

if(a%2===0){
  console.log('짝수');
}

// 산술 연산자: 거듭 제곱
// let power = 2**53-1;
let power = Math.pow(2,53)-1;

// console.log(remainder); 

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1,2,3] + [4,5,6]; //배열을 더하여도 타입은 string으로 나옴

let fristArray = [1,2,3];
let secoundArray = [4,5,6];

const newArray = fristArray.concat(secoundArray); //올드한 방식... concat 많이 사용하지 않음

// spread syntax
console.log( [... fristArray, ... secoundArray] ); // ... 사용할 시 배열을 전개시킴(펼침), 펼치고 [] 사용하여 배열로 만듦


// 연산자 우선 순위 (중요!)
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)


// 선,후 증감 연산자
// ++, --

let counter= 0;
counter++ // 0, 증가한 결과값은 1이지만 후증가는 증가 전의 값을 뱉음
counter // 1


// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
// let total = (count % 4) * (count /= 2) + count ** 3; 
// 135, 2*5'/= : 10/2를 하고 나눈 값을 count에 대입'+125'5**3'

let total = count % 4;
count = count / 2;
let pow = count ** 3;

total = total * count + pow;

console.log( total );
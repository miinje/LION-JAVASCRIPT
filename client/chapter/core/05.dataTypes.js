/* ------------------------ */
/* Data Types               */
/* ------------------------ */

// js는 객체로 이루어진 언어, 데이터 타입은 객체로부터 파생된 것들
// 모든 자료형은 전부 객체이며, 쓰기 편하게 하기 위해 7개의 다른 자료형으로 표기


/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값 : null
const empty = null;

// 2. 값이 할당되지 않은 상태 : undefined
let unknown;

// 3. 따옴표를 사용해 묶은 텍스트(큰따옴표 ", 작은 따옴표', 역따옴표[백틱, template literals] `) : 문자형

const hi = new String('hello'); //문자 생성자, 잘 사용하진 않음

const double = "hello"; // 문자 리터럴

const single = 'hello';
const backtick = `hello ${1+3}`;



// 4. 정수, 부동 소수점 숫자(길이 제약) : 숫자형
let number = new Number(1122);

let integer = 123; 
let floatingPointNumber = 10.45; 

console.log(Infinity); // 무한대
console.log("숫자가 아님" / 2); // NaN, 문자열을 숫자로 나누면 오류가 발생합니다.
console.log("숫자가 아님" / 2+5); // NaN, 이것 또한 숫자 타입


// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용) : BigInt 자료형
const big = BigInt(123);

const bigInteger = 123n;
// 자바스크립트가 안전하게 계산할 수 있는 가장 큰 수: 2**53-1

// 6. 참(true, yes) 또는 거짓(false, no)
const bool = true;

let nameFieldChecked = true; // 네, name field가 확인되었습니다(checked).
let ageFieldChecked = false; // 아니요, age field를 확인하지 않았습니다(not checked)


// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity) : 객체 {} 
const Obj = new Object({});
const obj = {};


// 8. 고유한 식별자(unique identifier) : 심볼(symbol)
const unique = Symbol('uid');


/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

console.log(typeof(1+2));

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"


// 언어 상, 오류

typeof Math // "object" -> 수학 연산을 제공하는 내장 객체, 내장 객체는 객체형임

typeof null 
// "object" -> 별도의 고유한 자료형을 가지는 특수 값으로 객체 X, 그러나 하위 호환성으로 위해 오류를 수정하지 않음

typeof alert // "function" -> 피연산자가 함수라면 "function"을 반환하지만, '함수'형은 따로 없음 함수는 객체에 속함


// Object

const user = {
  name: 'minjee',
  age: 28,
  sayHi: function(){
    console.log('hello');
  }
}

console.log(user);


// Array

const arr = [10,100,1000,1,2,3];
// 배열 순서는  0   1   2   3 4 5

const count = 0;

`li:nth-child(${count+1})`

console.log(arr[3]);


// function

function 붕어빵틀(재료){
  return 재료 + '붕어빵 반죽';
}

const 팥붕어빵 = 붕어빵틀('팥');
const 슈크림붕어빵 = 붕어빵틀('슈크림');

console.log(슈크림붕어빵);

// this



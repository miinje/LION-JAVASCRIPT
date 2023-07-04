/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값 : null
let age = null;

// 2. 값이 할당되지 않은 상태 : undefined
let adress;

// 3. 따옴표를 사용해 묶은 텍스트(큰따옴표 ", 작은 따옴표', 역따옴표[백틱] `) : 문자열
let name = "John";
alert( `Hello, ${name}!` );

// 4. 정수, 부동 소수점 숫자(길이 제약) : 숫자열
let n = 123;
alert( Infinity ); // 무한대
alert( "숫자가 아님" / 2 ); // NaN, 문자열을 숫자로 나누면 오류가 발생합니다.
alert( "숫자가 아님" / 2 + 5 ); // NaN


// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용) : BigInt 자료형
const bigInt = 123n;

// 6. 참(true, yes) 또는 거짓(false, no)
let nameFieldChecked = true; // 네, name field가 확인되었습니다(checked).
let ageFieldChecked = false; // 아니요, age field를 확인하지 않았습니다(not checked)

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity) : 객체 {} 
// 8. 고유한 식별자(unique identifier) : 심볼(symbol)


/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

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

// Array

// function

// this



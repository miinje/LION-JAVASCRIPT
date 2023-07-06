/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
//b, && and 연산자는 첫번째 false를 찾습니다

// 논리합(또는) 연산자
let AorB = a || b;
//a, || Or 연산자는 첫번째 true를 찾습니다

// 부정 연산자
let reverseValue = !value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy: false} && {};
//               true   true  true          true             true   -> {}
// 빈 객체, 빈 배열은 생성하는 자체에서 객체가 있다고 판단하기 때문에 true가 나옴
//' ' 공백도 문자로 치기 때문에 true
//모두 true이기 때문에 마지막 {}가 나옴

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy: true};
//                false  false       true                true          ->  2
// 가장 첫 truthy는 [2,3].length, 계산해서 2가 나오기 떄문에 답은 2

// function도 논리 연산 가능, js는 함수를 값처럼 인식함
//function(){} true
// 그러나 함수가 0을 return 한다면 false로 판단
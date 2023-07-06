/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
receivedEmailAddress = (emailAddress === undefined || emailAddress === null) ? 
'user@company.io': emailAddress;



// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? 'user@company.io';
receivedEmailAddress = emailAddress || 'user@company.io'; //결과는 같음


console.log( receivedEmailAddress );

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환


const WIDTH = '10px';
const boolean= false;


console.log( null || WIDTH ); //10px
console.log( null ?? WIDTH ); //10px

console.log( undefined || WIDTH ); //10px
console.log( undefined ?? WIDTH ); //10px

console.log( boolean || WIDTH ); //10px
console.log( boolean ?? WIDTH ); //false

console.log( '' || WIDTH ); //10px
console.log( '' ?? WIDTH ); //''


//어디에 많이 사용하나요?
const INIT = 0;
const button = document.querySelector('button');

button.style.height = `${INIT ?? parseInt(WIDTH)}px`;


/*
or 연산자, and 연산자, nullish

T || : 먼저 나오는 truthy를 찾는다, 아니면 끝을 반환
F && : 먼저 나오는 falsy를 찾는다, 아니면 끝을 반환
확 ?? : 먼저 나오는 확정값을 찾는다, 아니면 끝을 반환
*/


//Logical Assignment Operators
let x;
let y;

x ||= y; //x가 false면 y 값을 x에 할당시킬 것
x &&= y; //x가 true면 y 깂을 x에 할당시킬 것
x ??= y; //x가 undifined, null이면 y값을 x에 할당시킬 것


let title;

title ||= '제목입니다.';

console.log( title );
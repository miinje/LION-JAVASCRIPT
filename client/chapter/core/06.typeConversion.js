/* --------------------- */
/* Type Conversion       */
/* --------------------- */

// String : 접합을 수행
// Number : 수학연산을 수행
// Boolean : 논리연산을 수행

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;

console.log( typeof String(YEAR) ); //명시적 형변환, typeof로 확인 가능
console.log( YEAR + '' ); //암시적 형변환, 빈문자나 띄어쓰기 삽입


// undefined, null
let days = null;

console.log( typeof String(null) );
console.log( null + '' );


let undef = undefined;

console.log( typeof String(undefined) );
console.log( undefined + '' );


// boolean
let isCliked = true;

console.log( String(isCliked) );
console.log( isCliked + '' );



/* 데이터 → 숫자 (중요)----------------------------------------------------------- */

// undefined
let friend;
console.log( Number(friend) ); //NaN, friend가 정의되지 않음


// null
let bankbook = null;
console.log( Number(bankbook) ); //0


// boolean
let cuite = false;
console.log( Number(cuite) ); //0, true -> 1


// string
let num = '250'; //숫자형 문자
console.log( Number(num) ); //250
console.log( +num ); 
console.log( num*1 );
console.log( num/1 ); //암시적 형변환


// numeric string
let width = '105.3px';
console.log( Number(width) ); //NaN, px은 글자형이기 때문

let w = window.parseFloat(width) 
//브라우저 자체에서 제공하는 기능, 문자를 절삭시키고 숫자만 제공
//window의 기능이기 때문에 window 생략 가능
let wi = parseInt(width);
//동일하게 window에서 제공하는 기능, 정수만 남김
//parseFloat와 parseIn는 문자를 만단다면 뒤에를 절삭시킴

console.log( w ); //105.3
console.log( wi ); //105



/* 데이터 → 불리언 (완전 중요)---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

console.log( Boolean(friend) ); //false -> 값이 없기 때문에(undefined)
console.log( Boolean(bankbook) ); //false
console.log( Boolean(NaN) );
console.log( Boolean('') );
console.log( Boolean(1) ); //true
console.log( Boolean(0) ); //false, 여기까지 명시적 형변환

console.log( !false ); //암시적 형변환, !: 부정
console.log( !!false );//!!: 부정*2





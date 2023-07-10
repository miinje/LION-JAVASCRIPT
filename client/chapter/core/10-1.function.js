/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);


function getRandomValue() {
  return Math.random() > 0.5 ? 1:0;
}


// 함수 선언
function calcPrice(
  priceA,
  priceB,
  priceC = getRandomValue(),
  priceD = getRandomValue()
){

  // priceC의 값을 넣지 않았을 때 NaN이 뜨지 않게 하는 방법

  // priceC ||= 0;
  // priceC ??= 0;

  // if(!priceC) priceC = 0; // 한 줄인 경우 중괄호 생략

  // if(typeof priceC === 'undefined'){
  //   priceC = 0;
  // }

  if(!priceA || !priceB){
    throw new Error('calcPrice 함수의 첫 번째와 두 번째 매개변수는 필수 입력 값입니다.');
  } //밸리데이션

  return priceA + priceB + priceC + priceD;
}


const result = calcPrice(1000,2000) // 함수 호출

console.log( result );

// 함수 값 반환

// 매개 변수

// 매개 변수 vs. 전달 인자

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;

function rem(pxValue,base = 16) {

  if (!pxValue) throw new Error('rem 함수의 첫 번째 인수는 필수 입력 값입니다.')

  //pxValue이 string으로 들어올 때 바꾸는 방법

  pxValue = parseInt(pxValue, 10);

  // typeof pxValue === 'string' && (pxValue = parseInt(pxValue,10));
  //&& -> 첫 번째 falsthy 반환

  // if (typeof pxValue === 'string'){
  //   pxValue = parseInt(pxValue,10);
  //   //parseInt: 정수만 반환
  // }

  // return pxValue / base + 'rem';
  return `${pxValue / base}rem`;
}

console.log(rem('30px'));

/*
1. function name
2. validation
3. return value
4. paraneter, agument
5. test [Test Driven Development]
*/

//test
console.assert(rem(20)==='1.25rem');


// css(node: string, prop: string, value: number|strung) : string;
let css;





// node의 값을 'h1'으로 받았을 경우 

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우 

// value의 값이 number가 아닌 경우 



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
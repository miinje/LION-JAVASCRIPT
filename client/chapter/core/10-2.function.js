/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function() {

  // console.log(arguments);
  // arguments: 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사한 형태를 가지고 있는 것
  // 배열은 아니기 때문에 배열의 기능 사용 불가

  // atguments 객체를 사용해 함수의 매개변수 없이 아이템의 총합 구하기

  let total = 0;

  // 1. for 문
  // for (let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }


  // 2. for...of 문
  // for(let key of arguments){
  //   total += key;
  // }

  // arguments forEach(item)=>{
  //   console.log(item);
  // } //배열의 능력 사용 불가능!


  // 3. forEach 빌려쓰기
  // Array.prototype.forEach.call(arguments,function(item){
  //   total += item;
  // })


  //4. slice를 빌려 써 배열로 만들기

  //arguments 진짜 배열 만들기
  // let realArray = Array.prototype.slice.call(arguments);

  // console.log(realArray);

  // realArray.forEach(function(item){
  //   total += item;
  // }) //빌려쓰는 패턴


// 5. Array.from() -> 진짜 배열로 반환해 줌
// let realArray = Array.from(arguments);
// console.log(realArray);
// realArray.forEach(function(item){
//   total += item;
// })

//Object.prototype.toString() -> 인스턴스 메서드
//Object.entries() -> 스태틱 메서드

let arr = [10,50,100];

//6. spread syntax
// let realArray = [...arguments,...arr];
let realArray = [...arguments];


// console.log(realArray);
// realArray.forEach((item)=>{
//   total += item;
// })

// realArray.forEach(function(item,index){
//   console.log(item);
// })

//forEach: 배열만 사용할 수 있는 메서드, 안에 들은 값을 순회하여 나열%


// 7. Array.reduce 

// return realArray.reduce((acc,item)=>{
//   return acc + item
// },0)


total = realArray.reduce((acc,item)=> acc + item ,0);

return realArray.reduce((acc,item)=> acc + item ,0)


  // return total;
};

const result = calculateTotal(1000,500,200,6500);

console.log(result);



const user = {
  name : 'tiger'
}

user.name

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){
  
};
// 자바스크립트 특성 상 함수도 객체로 여기기 때문에 함수이름.name 가능


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {
  
};


// 콜백 함수 (표현)식
let callbackFunctionExpression = function(isActive,success,fail){

  // const callback = function(){ console.log('콜백 함수 실행!');

  if(isActive){
    // success();
    return;
  }

  // fail();
};

callbackFunctionExpression( 
  true, 
  function(){ console.log('성공!!') },
  function(){ console.log('실패!') }
)


// https://www.naver.com

const movePage = function(url,success,fail){

  if(url.match(/http.+www/) && typeof url === 'string'){
    // success(url)
  }else{
    // fail()
  }
}



movePage(
  'www.naver.com',
  function(url){
    console.log('성공 몇초 뒤 해당 페이지로 이동합니다.');
    
    setTimeout(() => {
      window.location.href = url
    }, 3000);
    
  },
  function(){
    console.log('올바르지 않은 주소입니다.');
    // ????
  }
)


/*
134: callbackF...을 정희함
*/


// 함수 선언문 vs. 함수 (표현)식




// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

//함수가 선언됨과 동시에 실행되는 것을 말합니다
//JavaScript 함수는 그 자체로 값(literal)
//함수 값을 즉시 실행(이름없이 호출)

// 변수의 보호를 위해 탄생(var를 보호하기 위해)
//은닉화 incapsulation(캡슐화)

//클로저 closure
import { css as c } from "css.js";

c()

const MASTER = (function(g){

  console.log( g );
  
  let uid = 'ajtwk753!@'

  return {
    getKey(){
      return uid;
    },
    setKey(value){
      uid = value;
    }
  };

})(window)

//MASTER는 함수 실행 값을 담은 것뿐 함수는 아님

// console.log(MASTER.getKey());
// console.log(getkey()); //마스터를 통해서만 접근 가능

console.log(MASTER.setKey('새로운 비밀번호'));



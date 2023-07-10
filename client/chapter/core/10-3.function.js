/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
} //함수 표현식

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
//                  rest parameter: 이름은 설정하는 대로 가능 ...children/...rest 등
let calcAllMoney = (...args)=>{
//                  나머지를 담음, a와 b가 함께 매개변수로 있다면 a와 b의 값을 제외한 값을 가짐

  console.log( args );

  // let total = 0;
  // args.forEach((item)=>{
  //   total += item;
  // })

  // return args.reduce(function(acc,item){
  //   return acc + item;
  // },0)

  return args.reduce((acc,item)=> acc + item ,0)
  // ,0 -> 기본값이 0이기 때문에 생략은 가능하지만, 명시해 주는 것이 더 좋음

  // return total;
};
// Arrow function은 arguments 값을 내장하고 있지 않다
// ...args: 받은 매게변수를 배열로 만들어 줌


const result = calcAllMoney(1000,500,200,2000);

// console.log( result );



// 화살표 함수와 this


//함수 선언문
function normalFunction(){
  console.log(this);
} //normalFunction() -> window

//함수 표현식
const expressionFunction = function(){
  console.log(this);
} //expressionFunction() -> window

//화살표 함수식
const arrowFunction = ()=>{
  console.log(this);
} //arrowFunction() -> window

//constructor(생성자)가 존재하지 않음
//const obj = new Object(), const obj = {} 사용 불가
//오로지 함수의 기능만을 수행, 다른 함수보다 빠르고 가벼움

/*
constructor(생성자)
-> new
-> 함수가 생성자로써의 기능을 할 떄는 이름을 대문자로 사용함
*/

function Button(){

}

const a = Button()

const b = new Button() // new를 붙이면 함수가 객체를 만들어냄, constructor가 있기 때문에






/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 

// repeat(text: string, repeatCount: number): string;
let repeat; 
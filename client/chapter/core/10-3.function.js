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

//this -> 누른 대상을 수집함


//함수 선언문
function normalFunction(){
  console.log(this);
} //normalFunction() -> window
//함수 표현식
const expressionFunction = function(){
  console.log(this);
} //expressionFunction() -> window

// 일반함수식은 this를 나를 호출한 대상이 this가 됨 대상에서 찾음

//화살표 함수식
const arrowFunction = ()=>{
  console.log(this);
} //arrowFunction() -> window, this를 찾지 않음 만약 사용자가 찾으면 제일 가까운 상위 부모 요소에서 찾음

// *constructor(생성자)가 존재하지 않음
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

//일반 함수: 나를 호출한 대상을 this로 바인딩 합니다.
//화살표 함수: this를 바인딩 하지 않음, 찾아야 한다면 나의 부모(this를 가진 상위 컨텍스트) 거 가지고 옴.



// 객체 안에서 this

//객체지향프로그래밍 vs 함수지향프로그래밍 (나중에 설명해 주신대여...)

//객체의 메서드를 정의할 떄는 화살표 함수보다 일반 함수가 더 좋음
//메서드 안에서 함수를 호출할 때는 화살표 함수가 더 좋음

const user = {
  total:0,
  name:'lion',
  age:23,
  address:'경기도 용인시 수지구',
  grades:[80,90,100],
  totalGrades(){ // = totalGrades:function(){ 컨사이스 메서드

    // function sayHi(){
    //   console.log( this );
    // }

    // sayHi() //누구에 의해 호출된 게 아님(window에 의해 호출됨) -> window를 띄움

    const sayHi = ()=>{
      console.log( this );
    }

    sayHi() //화살표 함수일 떄 부모는 totalGrades이기 때문에 this -> user가 됨

  }
}





/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 

// repeat(text: string, repeatCount: number): string;
let repeat; 
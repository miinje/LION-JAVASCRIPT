/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /*css*/`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`; //데이터 타입: string

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position:'fixed',
  zIndex:10000,
  top:'50%',
  left:'50%',
  width:'60vw',
  maxWidth:'800px',
  height:'40vh',
  minHieght:'270px',
  transform:'translate(-50%, -50%)'
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

//authorization: 권한
// authentication: 인증

authUser = {
  uid:'user-id-rnsaksen1101',
  name:'minjee',
  email:'ddd@li.il',
  isSignIn:true,
  permission:'paid' // free | paid
}

console.log( authUser );

// 점(.) 표기법

console.log( authUser.uid );
console.log( authUser.email );

// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

console.log( authUser['name'] );
console.log( authUser['permission'] );



// 계산된 프로퍼티 (computed property)
let computedProperty = 'phone'; // phone | tel


// class로 객체 만들기 : 객체 지향

class User{
  constructor(name,email){
    this.name = name;
    this.email = email
  }
}

const user3 = new User('수련','rnsaks@naver.com')


//함수로 객체 만들기 : 함수 지향

/* shorthand property (단축 프로퍼티) */
function creatUser(
  name,
  email,
  computerdProp = 'phone', //이름을 설정하고 싶다면 computerdProp을 사용
  number = '010-0000-0000'
  ){ 
  
  return {
    name, //name:name,
    email, //email:email,
    [computerdProp] : number
  }

} //함수는 값을 내뱉음


const user1 = creatUser(
  '민지',
  'njjj000180@naver.com',
  'tel',
  '010-2809-4983'
);

const user2 = creatUser('남경','nk1010@naver.com');



// 프로퍼티 포함 여부 확인

// key in user1

//자신(own)의 속성(property)을 가지고(has) 있는지

for(let key in user1){
  if(Object.prototype.hasOwnProperty.call(user1,key)){
    console.log(key);
  }
}



// 프로퍼티 나열

//key만 모아 놓은 배열 만들어 주세요 Object.keys()
let keyArray = Object.keys(authUser);

// value만 모아 놓은 배열 Object.values()
let valueArray = Object.values(authUser);

// key와 value 반환 Object.entries()
let keyValueArray = Object.entries(authUser);


//getProp(object)

function getProp(object){
  if (typeof object !== 'object') {
    throw new Error('getProp 함수의 매개변수는 객체 타입이어야 합니다.')
  }

  return Object.keys(object);
}

console.log( getProp(authUser) ); //['uid', 'name', 'email', 'isSignIn', 'permission']


function getp(object) {
  let result = [];

  for(let key in object){
    if({}.hasOwnProperty.call(object,key)){
      result.push(key)
    }
  }
  return result;
}


//        null(비우기)      아예 없앰
// 프로퍼티 제거(remove) or 삭제(delete) 

// authUser.name = null;
// delete authUser.uid
// console.log( authUser );


// remove property
function removeProperty(object,key){

  if (typeof object !== 'object') {
    throw new Error('...')
  }

  if (typeof key !== 'string') {
    throw new Error('...')
  }

  if (key === 'all') {
    for(let key of getProp(object)){
      object[key] = null;
    }

    return object
  }

  object[key] = null;

  return object;
}

removeProperty(authUser,'name');

removeProperty(authUser,'all');


// delete property

function deleteProperty(object,key) {

  delete object[key];

  return object;
}

deleteProperty(authUser,'name');


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


const student = {
  name,
  email,
  authorization,
  isLogin
}

console.log( student );


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {

  //!
  // return !(Object.keys(object).length);
  

  //if문
  // if(Object.keys(object).length === 0){
  //   return true;
  // }

  // return false;

  //삼항식
  // return getProp(object).length === 0 ? true : false;
  return getProp(object).length === 0;

}


isEmptyObject(authUser) //false






/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

//배열의 구조 분해 할당: 순서는 정해져 있으나, 변수의 이름을 원하는 대로 정할 수 있음

let color = ['#ff0000','#2b00ff','#00ff2f'];

// let [r,g,b] = color

let [,,green] = color; //따로 할당하지 않고 각괄호에 가두면 따로 할당한 것처럼 적용(순서는 그대로)
//마지막 것만 뽑고 싶다면 앞에 콤마를 붙여 줌

for(let [key,value] of Object.entries(authUser)){
  // let key = keyValue[0];
  // let value = keyValue[1];

  console.log( key );
}


// let red = color[0];
// let blue = color[1];
// let green = color[2]; 

console.log( green );






/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

//객체의 구조 분해 할당: 순서가 정해져 있지 않음, 변수의 이름을 바꿀 수 있음

const salaries = {
  권혜미:600,
  이수연:300,
  강예나:500,
  김태일:700,
}

const {권혜미,이수연,강예나,김태일} = salaries;

// const 권혜미 = salaries.권혜미
// const 이수연 = salaries.이수연
// const 강예나 = salaries.강예나
// const 김태일 = salaries.김태일


console.log( salaries.권혜미 );

console.log( 권혜미 );




//실사용 예시

function setElementCss(options){
  
  // const {
  //   width:w = 100,
  //   height:h = 10,
  //   overflow:o = '',
  //   color:c = '#fff',
  // } = options;

  const{ width,height,overflow,color } = options

  // console.log( w, c );
  console.log( width, color );

}


// const defaults = {
  // width: 100,
  // height: 200, 
  // overflow: false,
  // color: 'orange',
// }

setElementCss({
  width: 100,
  overflow: false,
  height: 200, 
  color: 'orange',
})


// setElementCss(defaults);

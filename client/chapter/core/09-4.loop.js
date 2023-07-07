/* ---------------- */
/* For In Loop      */
/* ---------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,

};

//in문: 객체 안에 내가 원하는 값(property)이 있는지 찾아 줌

const key = 'hasOwnProperty';

// console.log( key in javaScript );


// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// Object.prototype.nickName = 'minjee';


// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고(has) 있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?



// console.log( javaScript.hasOwnProperty(key) ); //hasOwnProperty: 자신의 속성을 가지고 있는지 알려 줌
// 이렇게 사용하는 것은 안전하지 않음

// console.log( Object.prototype.hasOwnProperty.call(javaScript,key) );

// Object.prototype = 찐객체 -> {} 이렇게 줄여 쓸 수 있씁니다



for(let key in javaScript){

  if({}.hasOwnProperty.call(javaScript,key)) {
    console.log(key);
  }
}



const tens = [10,100,1000,10000];

for(let key in tens){
  console.log(tens[key]);
}

// for ~ in 문
// - 객체 자신의 속성만 순환하는 용도? 객체 순환 용도 사용 가능
// - 배열 객체 순환에 사용할 경우? 좀 어려울 수 있다 우리가 원하는 index 값만 출력되지 않을 수 있음


// for...in 객체를 순환하는 용도로 사용이 가능함.
// 배열은..좀 그래요.. for...in은 객체에 양보하세요..


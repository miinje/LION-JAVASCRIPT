/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

// Object.prototype.toString.call([])

const isArray = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array';

function normalIsArray(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'
}


const isNull = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';

function normalIsNull(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';
}


const arr = [10,100,1000,10000];

const people = [
  {
    id:0,
    name:'김다연',
    profession:'프론트엔드 개발자',
    age:25,
    imageSrc:'MAksd23',
  },
  {
    id:1,
    name:'이현주',
    profession:'수영선수',
    age:40,
    imageSrc:'afdfakA',
  },
  {
    id:2,
    name:'김희소',
    profession:'물음표살인마',
    age:30,
    imageSrc:'fAKqi321',
  },
  {
    id:3,
    name:'김규민',
    profession:'래퍼',
    age:52,
    imageSrc:'AFGq3d23',
  },
  {
    id:4,
    name:'전진승',
    profession:'드라마평론가',
    age:18,
    imageSrc:'fQa15f3',
  },
]

/* 요소 순환 ---------------------------- */

// forEach : 값을 반환하지 않음
// 모든 아이템을 순회하여 반복하고 나열해 줌

arr.forEach((item,index)=>{
  // console.log(item,index);
})

people.forEach((item)=>{
  // console.log( item.name );
})

const span = document.querySelectorAll('span');

//이벤트 처리할 때 이 방식이 가장 좋은가요? no
//이벤트 위엄 event delegation

span.forEach((item,index)=>{

  item.addEventListener('click',function(){
    console.log(this,index);
  })

}) //이벤트가 많아지면 갯수가 늘어남




/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift

// reverse : 배열을 반대로 뒤집음
// arr.reverse()

// splice : 배열의 데이터 값을 삭제하거나, 원하는 곳에 항목을 넣을 수 있음
// arr.splice(1,2,'만두','찹쌀')
arr.splice(1,0,5,13)

// sort
// arr.sort() : 유니코드 식으로 정렬함 그래서 완벽하지 않습니다

//-> compare function: 이러한 문제점을 해결하기 위한 함수

// 반환 값 < 0: a가 b보다 앞에 있어야 한다.
// 반환 값 == 0: a와 b의 순서를 바꾸지 않는다.
// 반환 값 > 0: b가 a보다 앞에 있어야 한다.

arr.sort((a,b)=>{
  return a- b;
})


// console.log(arr);




/* 새로운 배열 반환 ------------------------ */
// 원본을 훼손하지 않음, 새로운 배열을 반환, 값을 내보냄

const user = ['선범','효윤','준석'];


// concat
// const newArray = arr.concat(user);
const newArray = [...arr,...user,'javascript','css'];
// console.log(newArray);

// slice
const slice = arr.slice(2,5);
// console.log(slice);


// toSorted
const toSorted = arr.toSorted((a,b)=>{
  return b - a;
})

// console.log(toSorted);


// toReversed
const toReversed = arr.toReversed();
// console.log(toReversed);


// toSpliced
const toSpliced = arr.toSpliced(2,0,'javascript','css','react')
// console.log(toSpliced);


// map: 새로운 배열을 내보냄
// 값을 반환함 -> get에 역할

// const job = people.map((item,index)=>{
//   return item.profession;
// })
//원하는 항목들만 뽑아 배열로 내보낼 때 사용


/*심화*/
// const job = people.map((item,index)=>{
//   return `<div>${item.profession}</div>`
// })

// job.forEach((item)=>{
//   document.body.insertAdjacentHTML('beforeend',item);
// })
// forEach -> 값을 반환하지 않고 할당만 함, set의 역할(not =set)


/*더심화*/
// const job = people.map((item,index)=>{
//   return /* html */`
//     <div class="userCard">
//       <div class="imageField">
//         <img src="${item.imageSrc}" alt="" />
//       </div>
//       <span>이름:${item.name}</span>
//       <span>직업:${item.profession}</span>
//       <span>나이:${item.age}</span>
//     </div>
//   `
// })



// job.forEach((item)=>{
//   document.body.insertAdjacentHTML('beforeend',item);
// })

// function render(){
  
//   return (
//     <div>
//       {
//         people.map((item,index)=>`<div>${item.profession}</div>`)
//       }
//     </div>
//   )
// }

// console.log(job);

/* 요소 포함 여부 확인 ---------------------- */

// console.log(arr);

// indexOf: 순서대로 찾음
console.log( arr.indexOf(10) );

// lastIndexOf: 뒤에서 몇 번째 있는지 찾음
console.log( arr.lastIndexOf(100) );

// includes: 포함 여부
console.log( arr.includes(1000) );

/* 요소 찾기 ------------------------------ */

// find: 해당 아이템을 반환
const find = people.find((item)=>{
  return item.id > 1
}) //일치하는 항목이 있으면 true를 떨구고 더이상 실행하지 않음

console.log(find);


// findIndex

const findIndex = people.findIndex((item)=>{
  return item.id === 3
})

console.log(findIndex);




/* 요소 걸러내기 --------------------------- */

// filter: 배열을 반환
const filter = people.filter((item)=>{
  return item.id > 2
})

console.log(filter);


/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const totalAge = people.reduce((acc,cur)=>{
  return acc + cur.age
})

console.log(totalAge);

const template = people.reduce((htmlCode,cur)=> htmlCode + `<div>${cur.name}</div>` ,'');


document.body.insertAdjacentHTML('beforeend',template);


// reduceRight

/* string ←→ array 변환 ------------------ */

const str = '남경 수련 예나 서연 유경 채영';

// split: 문자 -> 배열
const stringToArray = str.split(' ');

console.log(stringToArray);

// join: 배열 -> 문자



//map, filter, reduce 핵심
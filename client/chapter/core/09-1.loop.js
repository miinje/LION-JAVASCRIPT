/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */


// let repeat = 0;
// while(repeat<10) {

//   console.log(repeat);

//   repeat++;
// }


const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);


/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)


let i=0;
while (i<frontEndDev.length) {

  let value= frontEndDev[i];
  // console.log( value );

  i++
}



//변수를 담아 호출하여 쓰는 이유: 성능 측면


// while 문 (역순환 : 역방향)




let l=frontEndDev.length-1;

while (l>=0) {

  let value = frontEndDev[l];
  // console.log(value);

  --l;
}


// let l=frontEndDev.length;

// while (l>=0) {
//   --l;

//   let value = frontEndDev[l];
//   console.log(value);

// }



//원본 파괴
// 배열의 깊은 복사

// let copyArray = frontEndDev.slice(); //old
let copyArray = [...frontEndDev]; //new

while(copyArray.length){

  console.log( copyArray.pop() );
}
/*
pop(): 배열의 마지막 값을 뽑아서 반환함, 배열을 파괴함
shift(): 배열의 가장 처음 값부터 뽑아서 반환, 배열을 파괴함
slice(): 배열을 복사
[... : 스프레드 신탁스
*/


// 성능 진단 : 순환 vs. 역순환

/*
let z1 = performance.now();

//순환 while or 역순환 while

let z2 = performance.now();

console.log(z2 - z1);

//역순환이 더 좋음
*/
/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
/* ---------------------------------------------------------------------- */

let i=20;

do {

  if(i===0) {
    console.log('최초 실행');
  } else {
    console.log(`${i}번째 실행`);
  }

  i++
} while(i<10);
// do while문은 최초 실행이 거짓이어도 한 번은 실행함


// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let repeat = prompt('몇 번 반복하시겠습니까?',0); 

// do {
//   console.log(repeat);

//   if(repeat<0){
//     console.log('최초 실행합니다.');
//     break;
//   }

//   repeat--;
// } while(repeat);
//프롬포토로 처음 받은 값은 문자열로 표기, repeat-- 에서 숫자열로 변환


// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정


let first = document.querySelector('.first'); 
// let heading = document.querySelector('.heading');
// let second = document.querySelector('.second');

// first = first.nextSibling.nextSibling.nextSibling.nextSibling; 
// nextSibling : 선택된 요소의 다음 요소를 찾아줌
// text(코드와 코드 사이의 공백), comment(주석), span -> nodeType
// text node: 3, comment node: 8, element node(span): 1

// do {
//   first = first.nextSibling;
// } while(first.nodeType !== document.ELEMENT_NODE);
// // first에 nextSibling를 실행할 건데, first의 nodeType이 ELEMENT_NODE와 같지 않다면 코드 실행

// console.log( first );


function next(node) {
  do {
    node = node.nextSibling;
  }while(node.nodeType !== 1)

  return node;
}
//넥스트 함수: 대상을 던졌을 때, 대상의 다음 엘리먼트를 선택하게 만드는 함수
// document.ELEMENT_NODE = 1

const secound = next(first);

console.log(secound);




function prev(node) {
  do {
    node = node.previousSibling;
  }while(node.nodeType !== 1)

  return node;
}

console.log( prev(secound) );

// const div = next(heading);
// console.log(div);


// 로직 실행

// let loginCount = 0;

// if(로그인){

//   if(본인인증){
//     if(비밀번호찾기){
//       if(본인인증){
//         if(비밀번호바꾸기){
          
//         }
//       }
//     }
//   }
//   loginCount += 2;
// }



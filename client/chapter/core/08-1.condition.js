/* ---------------- */
/* Condition        */
/* ---------------- */

/*
if('0') {
  console.log('이 조건은 항상 실행됩니다.')
} else {
  console.log('이 조건에 부합하지 않습니다')
} 
*/


/*
let result = prompt('자바스크립트의 공식 이름은 무엇일까요?','').toLowerCase();

if(result === 'ECMAScript'){
  console.log('정답입니다!');
} else {
  console.log('모르셨나요? 정답은 ECMAScript입니다!');
}
*/


/*
let num = prompt('숫자를 입력해 주세요','숫자');

if(num>0) {
  console.log(1);
} else if(num<0) {
  console.log(-1);
} else {
  console.log(0);
}
*/


// let result = (a+b<4) ? '미만' : '이상'; 
//if문은 값을 반환하지 않음, 조건부 연산자(삼항식)은 값을 반환함




// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = confirm('너 영화 봤니?','');

// 영화 볼거니?
// let goingToWatchMovie = 'no';


if(!didWatchMovie){
  let goingToWatchMovie = confirm('영화 볼 거야?');

  if(goingToWatchMovie){
    let withWho = prompt('누구랑 볼 거니?')

    if(withWho === '여자친구') {
      console.log('부럽다');
    } else {
      console.log('재미있게 봐!');
    }
  } else {
    console.log('ok.');
  }

} else {
  let fun = confirm('재미있었어?');
  
  if(fun){
    let alone =confirm('혼자 봤어?');

    if(alone) {
      console.log('혼영 최고');

    } else {
      console.log('누구랑 봤어?');
    }
  }
}


// if 문(statement)
// if(didWatchMovie === 'yes') {
//   console.log('재미있었니?');
// } else if(goingToWatchMovie === 'yes'){
//   console.log('나랑 영화 보러 갈래?');
// } else {
//   console.log('안타깝게 됐다');
// }

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
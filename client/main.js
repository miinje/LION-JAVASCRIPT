// console.log('hello js!');

// const a = 10;


// 번들러의 힘
// webpack vite

import { getNode, clearContents, insertLast } from './lib/index.js';

// [page-1]
// 1. input value 값 가져오기
// 2. 두 수의 합 더하기
// 3. result 출력 하기



const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');


function handleInput() {
  
  // 1.input value 값 가져오기
  let fValue = +first.value;
  let sValue = +second.value;
  // 2. 두 수의 합 더하기
  let total = fValue + sValue;
  
  // 기존 값 지우기, 마지막에 넣기
  clearContents(result);
  insertLast(result,total);
}

// [page02]
// clear 버튼을 누르면 모든 글자가 초기화 될 수 있도록 만들어주세요


// 1. clear 버튼을 가져온다.
const clear = getNode('#clear');

function handleClear() {
  
  // 3. firstValue값을 지운다.
  clearContents(first);

  // 4. secondValue값을 지운다.
  clearContents(second);
  
  // 5. result의 값을 지운다.
  clearContents(result);

  // 6. result에 - 값을 넣는다.
  result.textContent = '-'
}


// 2. clear 버튼에 이벤트 핸들러를 연결한다.
clear.addEventListener('click',handleClear)

// 3. reuslt 출력하기
first.addEventListener('input',handleInput)
second.addEventListener('input',handleInput)




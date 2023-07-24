
import { 
  attr,
  clearContents,
  diceAnimation, 
  endScroll, 
  getNode, 
  getNodes,
  insertLast
} from "./lib/index.js";




// [phase-1] 주사위 굴리기
// 1. dice animation 불러오기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation이 실행될 수 있도록
//    - 주사위 굴리기 버튼 가져오기 
//    - 이벤트 핸들러 연결 
//    - 애니메이션 코드 작성 
// 3. 애니메이션 토글 제어
// 4. 클로저 + IIFE를 사용한 변수 보호


// [phase-2] 레코드 리스트 control / view
// 1. 주사위가 멈추면 기록/초기화 버튼 활성화
// 2. hidden 속성 제어하기
//        - 기록 버튼 이벤트 바인딩
//        - hidden 속성 false 만들기
//        - 초기화 버튼 이벤트 바인딩
//        - hidden 속성 true 만들기
// 3. 주사위 가져와서 렌더링
// 4. 스크롤 위치 내리기
// 5. 함수 분리


// [phase-3] 초기화 시키기
// 1. 아이템 지우기




// 진짜 진짜 쉬운 과제

// disableElement(node)
// enableElement(node)
// isDisableState(node)  => true / false

// visibleElement(node)
// invisibleElement(node)
// isVisibleState(node) => true / false




// 배열 구조 분해 할당

const [startButton,recordButton,resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');
const tbody = getNode('.recordList tbody');


let count = 0;  // 회차
let total = 0;  // 합계

// 템플릿 생성
function createItem(value) {
  
  // 뿌려줄 템플릿 만들기
  return /* html */`
    <tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${total += value}</td>
    </tr>
  `
}


// 템플릿 렌더
function renderRecordItem(){

  // 큐브의 data-dice 값 가져오기
  const diceValue = +attr('#cube','data-dice');

  insertLast(tbody,createItem(diceValue));
  
  endScroll(recordListWrapper);
}


// 주사위 이벤트 생성
const handleRollingDice = (()=>{
  
  let isClicked = false;
  let stopAnimation; // stopAnimation 자체의 값은 undefined

  return ()=>{

    if(!isClicked) { // dice play
      stopAnimation = setInterval(diceAnimation, 100); // 여기서 담음
      recordButton.disabled = true;
      resetButton.disabled = true;

      
    }else{ // dice stop
      clearInterval(stopAnimation); // if절에서 담은 값을 사용
      recordButton.disabled = false;
      resetButton.disabled = false;
    }

    isClicked = !isClicked;
  }
})() // -> IIFE 패턴


// 기록 창 띄우기
function hadleRecord() {
  recordListWrapper.hidden = false;
  
  renderRecordItem()
}


// 리셋
function hadlereset() {
  recordListWrapper.hidden = true;
  recordButton.disabled = true;
  resetButton.disabled = true;

  clearContents(tbody);

  count = 0;
  total = 0;
}




startButton.addEventListener('click',handleRollingDice); // -> 즉시 실행 함수식
recordButton.addEventListener('click',hadleRecord);
resetButton.addEventListener('click',hadlereset);

// startButton.addEventListener('click',handleRollingDice()); -> 일반 함수

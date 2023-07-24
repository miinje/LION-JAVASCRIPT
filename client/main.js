
import { 
  diceAnimation, 
  getNode, 
  getNodes
} from "./lib/index.js";




// [phase-1] 주사위 굴리기
// 1. dice animation 불러오기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation이 실행될 수 있도록
//    - 주사위 굴리기 버튼 가져오기 
//    - 이벤트 핸들러 연결 
//    - 애니메이션 코드 작성 
// 3. 애니메이션 토글 제어
// 4. 클로저 + IIFE를 사용한 변수 보호






// 배열 구조 분해 할당

const [startButton,recordButton,resetButton] = getNodes('.buttonGroup > button');



const handleRollingDice = ((e)=>{
  
  let isClicked = false;
  let stopAnimation; // stopAnimation 자체의 값은 undefined

  return ()=>{

    if(!isClicked) {
      stopAnimation = setInterval(diceAnimation, 100); // 여기서 담음

    }else{
      clearInterval(stopAnimation); // if절에서 담은 값을 사용
    }

    isClicked = !isClicked;
  }
})() // -> IIFE 패턴




startButton.addEventListener('click',handleRollingDice); // -> 즉시 실행 함수식

// startButton.addEventListener('click',handleRollingDice()); -> 일반 함수

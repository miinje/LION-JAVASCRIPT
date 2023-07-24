
import { jujeobData } from './data/data.js';
import { 
  getNode, 
  addClass,
  clearContents, 
  getRandom, 
  insertLast, 
  isNumericString, 
  removeClass,
  showAlert,
  toggleClass,
  shake,
  copy
} from './lib/index.js';


const submit = getNode('#submit');
const nameField = getNode('#nameField');
const resultArea = getNode('.result');


// [phase-1] 
// 1. 주접 떨기 버튼을 클릭할 수 있는 핸들러 연결
// 2. nameField에 있는 값 가져오기
// 3. jujeob 데이터 가져오기
// 4. jujeobData에서 랜덤한 주접 한 개를 가져오게 만들기


// [phase-2]
// 1. 아무 값도 입력 받지 못 했을 때 예외 처리
// 2. 공백 문자를 받았을 때 예외 처리  replace => regEXP -> 정규표현식
// 3. 숫자형 문자를 받았을 때 (ex. 123(fail), 선범123(sucess))


// [phase-3]
// 1. 잘못된 정보를 입력 받으면 사용자에게 알려 주세요
// 2. 재사용 가능한 함수 (showAlert)
// 3. gsap shake 기능 구현
// 4. animation 모듈화


// [phase-4]
// 1. result 클릭 이벤트 바인딩


// 주접 생성 및 에러 함수

function handleSubmit(e) {
  e.preventDefault();

  let name = nameField.value;
  const list = jujeobData(name);

  const pick = list[getRandom(list.length)];


  // 입력값이 없거나 공백을 넣었을 때 경고창 및 모션
  if (!name || name.replace(/\s*/g,'') === '') { // replace(a,b) -> a의 값을 b로 바꿔 줌
    showAlert('.alert-error','이름을 입력해 주세요!',2000);

    shake.restart();  // restart => gsap에서 제공해 주는 속성으로 재실행을 위한 속성
    
    return;
  }


// 이름을 제대로 입력 했을 때 클립보드에 복사가 될 수 있도록.
// let state = false;

// state = true;

// if(state){  ...logic }



  // 입력값에 숫자를 넣었을 때 경고창 및 모션
  if (!isNumericString(name)) { // isNaN -> 내가 가진 값이 NaN이 맞는지 판단
    showAlert('.alert-error','제대로된 이름을 입력해 주세요!',2000);

    shake.restart();

    return;
  }


  clearContents(resultArea);
  insertLast(resultArea,pick);

}


// 클립보드 복사 함수 

function handleCopy(){
  const text = resultArea.textContent;

  copy(text).then(()=>{
    showAlert('.alert-success','클립보드 복사 완료!');
  }) // 클립보드 복사를 성공했을 때 alert을 띄우게 함, promise
}



submit.addEventListener('click', handleSubmit);
resultArea.addEventListener('click',handleCopy);
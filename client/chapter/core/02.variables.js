/* ------------------ */
/* Variables          */
/* ------------------ */

let name, admin; //undefined

// 참조에 의한 복사
name = 'john';
admin = name; // name의 결과를 복사하여 admin에 삽입

name = 'beom';
//console.log(admin);  결과: 'john'


const ourPlanetName = 'Earth';
const currentUserName = 'minjee';


/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기 : 상품 가격은 계속 변화할 수 있음(let에 가까움,,,const도 될 수 있음)
let calcProductPriceQuantity;


// - 구매 제품 가격의 총 합 : 합이기 떄문에 값이 갱신되어야 함
let totalProductPrice;


// - 1년 기준 일(day)자 수 : 일반적으로 고정된 값, 찐상수로 표현
const DAYS_PER_YEAR = 365;


// - 구매 결제 여부 : 여부를 따질 때에는 is라는 네이밍을 붙임
let isPayment = false;
let hasClassName = true; // 있/없: has 했/안했: is 사용


// - 구매 결제 내역 : 구매 내역에 따라 가격 변동
let paymentHistory;


// - 브랜드 접두사 : 변동되지 않음
const BRAND_PREFIX = 'NIKE';


// - 오늘의 운세 : 매일 변화함
let fortuneOfToday


// - 상품 정보 : 
const productInFomation = '';


/* variables ----------------------------------------------------------- */






/* constant variables -------------------------------------------------- */





// redux, recoil, ajax


// panding 아무것도 안 함
// loading 로딩 중, 요청 대기
// fulfilled, resolved 응답 성공
// rejected 실패

const PADNING = 'api/padding';
const LOADING = 'api/loading';
// const LOADING = 'api/loading';
// const LOADING = 'api/loading';

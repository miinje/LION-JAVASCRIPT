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
let fortuneOfToday;


// - 상품 정보 : 고정
const productInFomation = '';


/* -------------------------------------------------------------------------- */
/*                                  variables     
변수(variable)
- 데이터를 저장할 때 쓰이는 '이름이 붙은 저장소'
- 성능상의 이슈와 유지보수를 위해 사용
- '상자' 안에 데이터를 저장하며, 이 상자에 붙은 '이름표'

let
- 모던한 변수 선언 키워드
- 한 줄에 여러 변수 선언 가능, 같은 변수 두 번 선언은 불가
- 변수명에는 오직 문자와 숫자, 그리고 $와 _만 들어갈 수 있음 (첫 번째 글자로 숫자는 불가함)
  let userName;
  let test123;
- 예약어 목록에 있는 단어는 변수명으로 사용 불가 (ex. let, class, return, function 등)

var
- 오래된 변수 선언 키워드, 잘 사용하지 않음
- 블록 스코프가 존재하지 않음: 선언한 변수의 스코프는 함수 스코프이거나 전역 스코프, 블록 밖에서 접근 가능

  if (true) {
    var test = true;
  }

  alert(test); true(if 문이 끝났어도 변수에 여전히 접근할 수 있음)
  -> 만약 'let'을 사용했다면 변수 test는 if문 내에서만 접근 가능
    Error: test is not defined가 뜸

- 변수의 중복 선언이 가능, 나중에 선언된 값을 따름
- var로 선언할 시, 함수가 시작되는 시점(전역 공간: 스크립트가 시작되는 시점)에서 처리됨

*/
/* -------------------------------------------------------------------------- */





/* -------------------------------------------------------------------------- */
/*                             constant variables      

const
- 변화하지 않는 수를 선언할  땐 'let' 대신 'const'를 사용
- 상수(constant): 'const'로 선언한 변수
- 값이 변경되는 것을 방지하면서 다른 개발자들에게 이 변수는 상수라는 것을 알림

대문자 상수
- 기억하기 힘든 값을 변수에 할당해 별칭으로 사용, 대문자와 밑줄로 구성
- 대문자로 상수를 만들어 사용할 시 장점
  1. 기억하기 쉬움
  2. 오타를 낼 확률이 낮음
  3. 변수 이름을 통해 코드 가독성 증가

* 일반적인 방식의 상수와 대문자 사용은 어떻게 구분할까
- '상수'는 절대 변치 않는 값을 의미
  1. 코드가 실행되기 전 이미 그 값을 알고 있는 상수 
  2. 런타임 과정에서 계산되지만 최초 할당 이후 값이 변하지 않는 상수도 존재
- 대문자 상수는 '하드 코딩'한 값의 별칭을 만들 때 사용 
  *하드코딩: 데이터를 코드 내부에 직접 입력하는 것

  const pageLoadTime = '웹페이지를 로드하는데 걸린 시간';
  -> 페이지가 로그되기 전에는 값이 정해지지 않기 떄문에 일반적인 방식을 사용

*/
/* -------------------------------------------------------------------------- */





// redux, recoil, ajax


// panding 아무것도 안 함
// loading 로딩 중, 요청 대기
// fulfilled, resolved 응답 성공
// rejected 실패

const PADING = 'api/panding';
const LOADING = 'api/LOADING';
const FULFILLED = 'api/FULFILLED';
const REJECTED = 'api/REJECTED';

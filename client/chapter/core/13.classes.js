/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.
// 객체 지향 프로그래밍

// Animal => tiger => 호돌이

class Animal{

  legs = 4;
  tail = true;
  stomach = [];

  constructor(name){
    this.name = name
  }

  set eat(food){
    this.stomach.push(food);
  }

  get eat(){
    return this.stomach
  }
}


class Tiger extends Animal{ //Animal을 확장시켜 Tiger을 만듦

  #prey = ''; //#: 밖에 사용자가 이 요소에 접근할 수 없음 (안 보이게 숨김처리)

  constructor(name,pattern){
    super(name) //super(): 부모의 프로퍼티를 사용, class를 확장시켜 또다른 class를 만들 때 필수로 들어감
    this.pattern = pattern;
  }

  hunt(target){
    this.#prey = target;
    return `${target}에게 조용히 접근한다.`
  }

  attack(){
    return `강력한 발톱 공격으로 ${this.#prey}가 죽었습니다.`
  }

  static sleep(name){ //static을 사용할 시 본래의 객체로 실행해야 함 ex. Tiger.sleep()
    console.log(name + '이(가) 잠을 잔다.');
  }

}


const beom = new Tiger('범','호랑이무늬');

const hoho = new Tiger('hoho','호피무늬');

// const tiger = new Animal('호돌이')

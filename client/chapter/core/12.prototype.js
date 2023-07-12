/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// const animal = {
//   legs:4,
//   tail:true,
//   stomach:[],
//   set eat(food){
//     this.stomach.push(food);  // setter -> animal.eat='사료'
//   },
//   get eat(){
//     return this.stomach;     // getter -> animal.eat
//   } //객체에서는 setter-set, getter-get의 키워드로 설정이 가능함 set, get의 이름이 동일해도 됨
// }


// const tiger = {
//   pattern:'호랑이무늬',
//   prey:'',
//   hunt(target){
//     this.prey = target;
//     return `${target}에게 조용히 접근한다.`
//   },
// }

// const fox = {
//   prey:'',
//   __proto__ : animal, //밖, 안 둘 다 설정할 수 있음
// }

// tiger.__proto__ = animal;




//new Object(), 생성자 함수, {}, 일반함수
//함수는 두 가지 일을 할 수 있다 (양면의 얼굴을 가지고 있다)
//함수 이름 앞에 대문자로 시작하면 암묵적으로 생성자 함수다


// function User(name,age,email) {
//   this.name = name;
//   this.age = age;
//   this.email = email
// }

// function button(){
  
// }

// const a = button()

// const person1 = new User('민지',23,'ddd@il.li') //생성자 함수





// 생성자 함수 
// 하나의 객체와 관련된 새로운 객체 여러개를 만들 때 재사용하기 위해서 생성자 함수를 쓰게 된다

function Animal(){
  this.stomach = [];
  this.legs = 4;
  this.tail = true,
  this.eat = function (food){
    this.stomach.push(food);
  }
  this.printEat = function(food){
    return this.stomach;
  }
}



const tiger = new Animal();

tiger.pattern = '호랑이 무늬';

tiger.hunt = function (target) {
  this.prey = target,
  console.log(`${target}에게 접근합니다.`);
}


const cat = new Animal();

cat.say = () => 'meow';

const fox = new Animal();
const rabbit = new Animal();






//const str = new String('a');
// const num = new Number(1);
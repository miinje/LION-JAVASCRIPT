
// memoization ->컴퓨터 프로그램이 동일한 계산을 반복할 때, 계산한 값을 저장해 주는 함수

import { getNode } from "../dom/index.js"

const cache = {
  
}


export const memo = (key,callback)=>{


  if(!callback) return cache[key]
  

  if(cache[key]){
    console.warn(`${key}는 이미 캐시된 값이 존재합니다.`);
    return cache[key]
  }

  cache[key] = callback();

  console.log(cache);
}


// memo('cube',()=> getNode('#cube'))
// memo('cube',()=> 123)



console.log( memo('cube') );

// 객체를 만들어서 key:value 쌍으로 저장 
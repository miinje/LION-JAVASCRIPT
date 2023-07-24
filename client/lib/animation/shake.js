

/* global gsap */
  // -> gsap을 전역에서 관리하게 함

export const shake = gsap.to('form',{
  duration:0.1,
  x:10,
  repeat:5,
  yoyo:true,
  clearProp:'x',
  paused:true
})

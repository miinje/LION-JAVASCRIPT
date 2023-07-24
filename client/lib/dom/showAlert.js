import { addClass, removeClass } from "./css.js";
import { getNode } from "./getNode.js";




export function showAlert(node,text = '에러입니다!',timeout = 2000) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  addClass(node,'is-active');

  node.textContent = text; 

    setTimeout(()=>{
      removeClass(node,'is-active')
    },timeout);
}


// disableElement(node)
const disableElement = node => node.disabled = true;

// function disableElement(node) {
//   node.disabled = true;
// }



// enableElement(node)
const enableElement = node => node.disabled = false;

// function enableElement(node) {
//   node.disabled = false;
// }



// isDisableState(node)  => true / false
export const isDisableState = (node,value) => node.disabled = value;

// function isDisableState(node,value) {
//   node.disabled = value;
// }
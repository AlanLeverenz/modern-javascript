// Traversing the DOM

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes (also counts line breaks) > Nodelist
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// Node types
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itselfr
// 10 - Doctype

// Get children element nodes > HTML Collection
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children;

// firstChild = will show text nodes
val = list.firstChild;
// firstElementChild = will show element node
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;
// will count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;

// get parentElement;
val = listItem.parentElement;

// get parent of parent
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);

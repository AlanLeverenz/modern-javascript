// document.querySelector('.clear-tasks').addEventListener('click', function (e) {
//   console.log('Hello World');
//   // e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('mouseover', onClick);

function onClick(e) {
  // console.log('Clicked');

  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  // gets the DOMTokenList
  val = e.target.classList;

  e.target.innerText = 'Hello';

  // Event type
  val = e.type;

  // Timestemp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}

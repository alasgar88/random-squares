const btn = document.querySelector(".btn");
let allDivs = document.querySelectorAll(".add");

// get random coordinates for adding div
const getCoordinates = (divSize, divSizePx) => {
  // we get values from 0 -100 as our screen width and heigh between 0% and 100%
  let width = Math.floor(Math.random() * 100);
  // to avoit overflow
  if (width + divSize >= 100) {
    width = 100 - divSize - 1;
  }
  let height = Math.floor(Math.random() * 100);
  // to avoid averflow
  if (height + divSizePx >= 100) {
    height = 100 - divSizePx - 1;
  }
  console.log({ width, height, divSize, divSizePx });
  return { width, height };
};

// create random color generator function
function randomInteger(max = 256) {
  return Math.floor(Math.random() * max);
}

// get random div size / maximum div size will be 15% from window width ,minimum div width/height will be 5% from screen width
const getRandomDivSize = () => {
  // this function will return div width/height in %
  //  we add + 5 to the end of function because div widht or height cant be 0%
  const result = Math.floor(Math.random() * 10) + 5;
  return result;
};

// add div to window
const drowSquare = () => {
  // create div ,add class and postion property
  const div = document.createElement("div");
  div.className = "add";
  div.style.position = "absolute";

  // add random  width and height / call getRandomDivSize function
  const divSize = getRandomDivSize();
  // get px value from window width
  const windowWidth =
    (parseInt(window.innerWidth) * parseInt(`${divSize}%`)) / 100;
  div.style.width = `${windowWidth}px`;
  div.style.height = `${windowWidth}px`;
  // get % value from window height
  const windowHeight = parseInt(window.innerHeight);
  const percentage = (windowWidth / windowHeight) * 100;
  console.log(percentage);
  //  get random color and apply to div as background color
  div.style.background = `rgba(${randomInteger()},${randomInteger()},${randomInteger()})`;

  // get random coordinates and apply to div
  const { width, height } = getCoordinates(divSize, percentage);
  div.style.top = `${height}%`;
  div.style.left = `${width}%`;

  // add div to window
  window.document.body.appendChild(div);
  allDivs = document.querySelectorAll(".add");
  removeDivEventListener();
};

// event listener for adding div
btn.addEventListener(
  "click",
  function () {
    drowSquare();
  },
  false
);

// remove old eventListener before adding new one
function removeDivEventListener() {
  function removeDiv() {
    this.remove();
  }

  allDivs.forEach((div) => {
    div.removeEventListener("click", removeDiv);
    div.addEventListener("click", removeDiv);
  });
}

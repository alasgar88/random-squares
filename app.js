const btn = document.querySelector(".btn");
let allDivs = document.querySelectorAll(".add");
const container = document.querySelector(".container");

// create random color generator function
function randomInteger(max = 256) {
  return Math.floor(Math.random() * max);
}

// random divSize
const getRandomDivSize = () => {
  // minimum div size 50px,maximum div size 200px
  const result = Math.floor(Math.random() * 150) + 50;
  return result;
};

const drowSquare = () => {
  const div = document.createElement("div");
  div.className = "add";
  div.style.position = "absolute";
  const divSize = getRandomDivSize();
  div.style.width = `${divSize}px`;
  div.style.height = `${divSize}px`;
  div.style.background = `rgba(${randomInteger()},${randomInteger()},${randomInteger()})`;
  // get coordinates for div
  const { width, height } = container.getBoundingClientRect();
  var from_top = Math.floor(Math.random() * height);
  var from_left = Math.floor(Math.random() * width);
  div.style.top = `${
    from_top + divSize >= height ? from_top - divSize : from_top
  }px`;
  div.style.left = `${
    from_left + divSize >= width ? from_left - divSize : from_left
  }px`;

  // add div to window
  container.appendChild(div);
  allDivs = document.querySelectorAll(".add");

  //  eventListener remove Div
  allDivs.forEach((div) => {
    div.addEventListener("click", function () {
      console.log(this);
      this.remove();
    });
  });
};

//  eventListener add Div
btn.addEventListener("click", drowSquare);

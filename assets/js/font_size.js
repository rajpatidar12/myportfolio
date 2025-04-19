const myName = document.getElementById("home__name");
const btn = document.getElementById("my-btn");
function makeTextSizer(size) {
  function changeSize() {
    myName.style.fontSize = `${size}`;
  }
  return changeSize;
}

const size20 = makeTextSizer("20px");
const size30 = makeTextSizer("30px");
const size40 = makeTextSizer("40px");
const size50 = makeTextSizer("50px");

btn.addEventListener("click", size20);
let currentSize = 20;
btn.addEventListener("click", function () {
  currentSize += 10;
  if (currentSize > 50) {
    currentSize = 20;
  }
  myName.style.fontSize = `${currentSize}px`;
});

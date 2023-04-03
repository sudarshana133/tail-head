const coin = document.getElementById('coin');
const heading = document.getElementById('heading');
const button = document.getElementById('flip');

function coinSide() {
  const factor_deciding = Math.floor(Math.random() * 2) + 1;
  const coinFound = "img" + factor_deciding + ".jpg";
  const imgsource = "images/" + coinFound;
//   console.log(imgsource);
  if (factor_deciding === 1) {
    heading.innerHTML = "Head";
    coin.setAttribute("src", imgsource);
  } else if (factor_deciding === 2) {
    heading.innerHTML = "Tail";
    coin.setAttribute("src", imgsource);
  }
}

function flipCoin() {
  coin.setAttribute("src", "images/rename.gif");
  setTimeout(() => {
    coinSide();
  }, 1000);
}

button.addEventListener("click", flipCoin);

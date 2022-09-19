const hamburgerDisplay = document.querySelector(".first");
const button = document.querySelector(".second");
function getHamburger() {
  fetch("https://my-burger-api.herokuapp.com/burgers")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const random = Math.random() * data.length;
      const randomInteger = Math.floor(random);
      const name = data[randomInteger].name;
      console.log(name);
      hamburgerDisplay.innerHTML = name;
    });
}
button.addEventListener("click", getHamburger);
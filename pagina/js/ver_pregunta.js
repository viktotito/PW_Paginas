const UtilBtn = document.querySelector(".util__btn");
const UtilIcon = document.querySelector("#icon");
const NOUtilBtn = document.querySelector(".Noutil__btn");
const NOUtilIcon = document.querySelector("#iconNo");
const FavBtn = document.querySelector(".fav__btn");
const FavIcon = document.querySelector("#iconfav");
  let count = document.querySelector("#count");

  //Al hacer click
let clicked = false;

UtilBtn.addEventListener("click", () => {
    if (!clicked) {
      clicked = true;
      UtilIcon.innerHTML = `<i class="fas fa-lightbulb"></i>`;
      count.textContent++;

    }
    else{
        clicked = false;
        UtilIcon.innerHTML = `<i class="far fa-lightbulb"></i>`;

        count.textContent--;

    }
});

NOUtilBtn.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    NOUtilIcon.innerHTML = `<i class="fas fa-sad-tear"></i>`;

  }
  else{
      clicked = false;
      NOUtilIcon.innerHTML = `<i class="far fa-sad-tear"></i>`;

  }
});



FavBtn.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    FavIcon.innerHTML = `<i class="fas fa-heart"></i>`;

  }
  else{
      clicked = false;
      FavIcon.innerHTML = `<i class="far fa-heart"></i>`;

  }
});
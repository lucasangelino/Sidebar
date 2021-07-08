let toggleMenu = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let menuList = document.querySelectorAll(".list");
toggleMenu.onclick = function () {
  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
};

function handleMenuSelect(e) {
  e.preventDefault();
  menuList.forEach((listItem) => {
    listItem.classList.remove("active");
  });
  this.classList.add("active");
}

menuList.forEach((item) => item.addEventListener("click", handleMenuSelect));

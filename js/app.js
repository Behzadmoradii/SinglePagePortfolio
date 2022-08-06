const navList = document.getElementById("navList");
const listItem = document.querySelectorAll(".list-item");
const section = document.querySelectorAll("section");
const ShowBtn = document.getElementById("icon");
const portfolioItem = document.querySelectorAll(".portfolio-list-item");


// ------- Active Main Menu
const activeMenu = (event) => {
  listItem.forEach(item => {
    let current = document.getElementsByClassName("navItemActive");
    console.log(current)
    current[0].className = current[0].className.replace(" navItemActive", "");
    event.target.className += " navItemActive";
  })
  window.addEventListener(
    "scroll",
    (e) =>
      e.target.scrollingElement.clientWidth <= 768 &&
      (navList.style.display = "none")
  );
};

//  -------Hide Portfolio Item
const hideBoxPortfolio = () => {
  document
    .querySelectorAll(".portfolio-box-item")
    .forEach((item) => (item.style.display = "none"));
};

// ---------Show Portfolio Item
const showBoxPortfolio = () => {
  document
    .querySelectorAll(".portfolio-box-item")
    .forEach((item) => (item.style.display = "block"));
};

// -------- Set Active item List
const removeActivePortfolio = () => {
  portfolioItem.forEach((item) => item.classList.remove("portfolio-active"));
};

// --------Filter Portfolio Item
const filterBoxPortfolio = (filter) => {
  let items = document.getElementsByClassName(`portfolio-${filter}`);
  for(let i = 0; i < items.length; i++) {
    items[i].style.display = "block";
  }
};

// -------Set rol for Portfolio
const portfolioBoxes = (event) => {
  event.preventDefault();

  let type = event.target.attributes["data-type"].value;
  if (type === "all") {
    showBoxPortfolio();
  } else {
    hideBoxPortfolio();
    filterBoxPortfolio(type);
  }

  removeActivePortfolio();
  event.target.className += " portfolio-active";
};

// ------ scroll and Hide or Show Menu
const scrollMenuToggle = (e) => {
  let heightScroll = e.srcElement.scrollingElement.scrollTop.toFixed();
  if (heightScroll >= 40) {
    document.querySelector(".navbar").classList.add("responseNav");
  } else {
    document.querySelector(".navbar").classList.remove("responseNav");
  }
};

// ------- Icon toggle menu
const toggleMenu = () => {
  navList.style.display == "block"
    ? (navList.style.display = "none")
    : (navList.style.display = "block");
};

// -------function for Order all script
const scriptOrder = () => {
  listItem.forEach((item) => item.addEventListener("click", activeMenu));
  ShowBtn.addEventListener("click", toggleMenu);
  window.addEventListener("scroll", scrollMenuToggle, false);
  portfolioItem.forEach((item) => item.addEventListener("click", portfolioBoxes));  
  document
  .querySelector("form")
  .addEventListener("submit", (e) => e.preventDefault());
}


// ---------When Page is Loading Script Run
window.addEventListener("load", scriptOrder)


var a = "ali";


console.log(" undefined : "+typeof undefined, ", null : "+typeof null, undefined, null)
console.log({name: "ali", time: 21, age: 33} === {name: "ali", time: 21, age: 33})
console.log(!!typeof(a))

console.log(portfolioItem.target)
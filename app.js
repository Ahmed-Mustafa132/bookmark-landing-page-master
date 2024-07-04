// nav function
const nav = document.querySelector("nav");
const menuIcon = document.querySelector("#menuIcon");
const closeNav = document.querySelector("#closeNav");
menuIcon.addEventListener("click", () => {
  nav.style.transform = " translateX(0)";
});
closeNav.addEventListener("click", () => {
  nav.style.transform = " translateX(100%)";
});
// section 3 function
const list1 = document.querySelector(".list1");
const list2 = document.querySelector(".list2");
const list3 = document.querySelector(".list3");

const tap1 = document.querySelector("#tap-1");
const tap2 = document.querySelector("#tap-2");
const tap3 = document.querySelector("#tap-3");

list1.addEventListener("click", () => {
  tap1.style.display = "flex";
  tap2.style.display = "none";
  tap3.style.display = "none";
  list1.id = "active";
  list2.id = "";
  list3.id = "";
});
list2.addEventListener("click", () => {
  tap2.style.display = "flex";
  tap1.style.display = "none";
  tap3.style.display = "none";
  list2.id = "active";
  list1.id = "";
  list3.id = "";
});
list3.addEventListener("click", () => {
  tap3.style.display = "flex";
  tap1.style.display = "none";
  tap2.style.display = "none";
  list3.id = "active";
  list1.id = "";
  list2.id = "";
});

// section 5 function

function question(el) {
  if (el.id == "answer-active") {
    el.id = "none";
  } else {
    el.id = "answer-active";
  }
}

// valid email
let btn = document.querySelector("#btn");
let email = document.querySelector("#email");
let formContener = document.querySelector(".formContener");
let errSign = document.querySelector(".errSign");
function validateEmail() {
  if (email.value.toLowerCase().match(/\w*@\w*[.]\w*/) == null) {
    formContener.style.border = "3px solid hsl(0, 94%, 66%)";
    errSign.style.display = "block";
    btn.disabled = true;
  } else {
    formContener.style.border = "none";
    errSign.style.display = "none";
  }
}
function enableBtn() {
  btn.disabled = false;
}

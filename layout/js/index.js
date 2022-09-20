function ToggleMenu() {
  const togglemenu = document.querySelector(".menu");
  togglemenu.classList.toggle("activee");
}

let li = document.getElementsByTagName("li");
for (let i = 0; i < li.length; i++) {
  li[i].onclick = (e) => {
    let n = 0;
    while (n < li.length) {
      li[n++].className = "";
    }
    li[i].className = "activee";
  };
}

const container = document.querySelector(".box-item");
const allbox = container.children;
const containerwidth = container.offsetWidth;
const controls = document.querySelector(".controls");
const margin = 120;
let items = 0;
let totalitems = 0;
let jumpslidewidth = 0;

let boxitem = document.querySelector(".box-item").children;
let controlsicon = document.querySelector(".controls-icon");
let index = 0;
let totalitemsslide = boxitem.length;
let boxactive = document.querySelectorAll(".box-active-div");
console.log(boxactive);
controlsicon.onclick = function () {
  next("next");
};

function next(direction) {
  if (direction == "next") {
    index++;
    if (index == totalitemsslide) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalitemsslide - 1;
      console.log(index);
    } else {
      index--;
      console.log(index);
    }
  }
  for (let i = 0; i < boxitem.length; i++) {
    boxitem[i].classList.remove("actives-p");
  }
  boxitem[index].classList.add("actives-p");
  for (let i = 0; i < boxactive.length; i++) {
    boxactive[i].classList.remove("active-box");
  }
  boxactive[index].classList.add("active-box");
}
console.log(boxitem);

responsive = [
  { breakPoint: { width: 0, item: 1 } },
  { breakPoint: { width: 600, item: 2 } },
  { breakPoint: { width: 1000, item: 3 } },
];

function load() {
  for (let i = 0; i < responsive.length; i++) {
    if (window.innerWidth > responsive[i].breakPoint.width) {
      items = responsive[i].breakPoint.item;
    }
  }
  start();
}

function start() {
  let totalitemwidth = 0;
  for (let i = 0; i < allbox.length; i++) {
    allbox[i].style.width = containerwidth / items - margin + "px";
    totalitemwidth += containerwidth / items;
    totalitems++;
  }
  container.style.width = totalitemwidth + "px";

  let allslide = Math.ceil(totalitems / items);
  let ul = document.createElement("ul");
  for (let i = 1; i <= allslide; i++) {
    let li = document.createElement("li");
    li.id = i;
    li.innerHTML = i;
    li.setAttribute("onclick", "controlslides(this)");
    ul.appendChild(li);
    if (i == 1) {
      li.className = "actives";
    }
  }
  controls.appendChild(ul);
}
function controlslides(ele) {
  const ul = controls.children;
  const li = ul[0].children;
  let actives;
  for (let i = 0; i < li.length; i++) {
    if (li[i].className == "actives") {
      actives = i;
      li[i].className = "";
    }
  }
  ele.className = "actives";
  let numb = ele.id - 1 - actives;
  jumpslidewidth = jumpslidewidth + containerwidth * numb;
  container.style.marginLeft = -jumpslidewidth + "px";
}
// function nextitems() {
//   const ul = controls.children;
//   const li = ul[0].children;
//   for (let i = 0; i < li.length; i++) {
//     if (li[i].className == "actives") {
//       li[i].className = "";
//     } else li[i].className = "actives";
//   }
//   li.className = "actives";
// }


window.onload = load();
$(document).ready(function() {
  $("#lightSlider").lightSlider(); 
});

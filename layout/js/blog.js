let li = document.getElementsByTagName("li");
for (let i = 0; i < li.length; i++) {
  li[i].onclick = (e) => {
    let n = 0;
    while (n < li.length) {
      li[n++].className = "";
    }
    li[i].className = "active";
  };
}

let controls = document.querySelector(".controls-item").children;
for (let i = 0; i < controls.length; i++) {
  controls[i].onclick = (e) => {
    let n = 0;
    while (n < controls.length) {
      controls[n++].className = "li1";
    }
    controls[i].className = "active-control";
  };
}
console.log(controls);

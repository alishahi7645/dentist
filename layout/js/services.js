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

function contentstart1() {
  let contentactive1 = document.querySelector(".content-items1");
  contentactive1.classList.remove(".hide");
  contentactive1.classList.toggle("content-active");
  let content = document.querySelector(".content1");
  content.classList.toggle("active-content");
}
function contentstart2() {
  let contentactive2 = document.querySelector(".content-items2");
  contentactive2.classList.remove(".hide");
  contentactive2.classList.toggle("content-active");
  let content = document.querySelector(".content2");
  content.classList.toggle("active-content");
}
function contentstart3() {
  let contentactive3 = document.querySelector(".content-items3");
  contentactive3.classList.remove(".hide");
  contentactive3.classList.toggle("content-active");
  let content = document.querySelector(".content3");
  content.classList.toggle("active-content");
}

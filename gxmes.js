const elemsrendered = () => {
try {
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
$$("h2").forEach(el => el.addEventListener("click",function() {
  location.href = "../play/?" + this.textContent
}))
} catch(err) {
  alert(err);
}
}

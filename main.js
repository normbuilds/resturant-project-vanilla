let tglBtn = document.getElementById("menu-drop");
let menu = document.getElementById("menu");
let serve = document.getElementById("service");
let servBtn = document.getElementById("service-drop");
const tgl = () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
};

const srvTgl = () => {
  serve.style.display = serve.style.display === "flex" ? "none" : "flex";
};
servBtn.addEventListener("click", srvTgl);

tglBtn.addEventListener("click", tgl);

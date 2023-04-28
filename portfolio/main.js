function boom(){
    alert("boom!")
    console.log("boom!")
}
let pastPos = window.pageYOffset;

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;

  if (pastPos > currentScrollPos) {
    document.getElementById("header").classList.add("show");
    document.getElementById("header").classList.remove("hide");
  } else {
    document.getElementById("header").classList.add("hide");
    document.getElementById("header").classList.remove("show");
  }

  pastPos = currentScrollPos;
};